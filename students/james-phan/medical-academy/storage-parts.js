// Split response payloads by fixed mission range. The original main document remains the manifest.
// Additional lessons use the existing private /responses/current rules with position, not page.
export const PART_START=168, PART_SIZE=10;
export function partNumber(i){return Math.floor((Number(i)-PART_START)/PART_SIZE)}
export function splitProgress(s){const main=JSON.parse(JSON.stringify(s));delete main.parts;main.responses={};const groups={};for(const [k,v] of Object.entries(s.responses||{})){const i=Number(k);if(i<PART_START)main.responses[k]=v;else{const part=String(partNumber(i));(groups[part]||(groups[part]={}))[k]=v}}return {main,groups}}
export function mergeProgress(main,groups){if(!main)return null;const out={...main,responses:{...(main.responses||{})}};delete out.parts;for(const [part,group] of Object.entries(groups)){for(const [k,v] of Object.entries(group||{})){if(Number(k)<PART_START||String(partNumber(k))!==part)throw Error("Response part range mismatch");out.responses[k]=v}}return out}
export function partLesson(n){if(!/^(0|[1-9]\d*)$/.test(String(n)))throw Error("Invalid response part");return "medical-academy-2026-part-"+n}
export function planProgress(s,cache,stamp){const {main,groups}=splitProgress(s),writes=[],next={};main.parts={};for(const [part,answers] of Object.entries(groups)){const raw=JSON.stringify(answers),old=cache.get(part),same=old&&old.raw===raw;const rev=same?old.rev:stamp;main.parts[part]=rev;next[part]={rev,raw,answers};if(!same)writes.push({part,rev,answers})}return {main,writes,next}}
