const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const levels=["Not yet","Rarely","Sometimes","Often","Consistently"];
export function studentWidget(q,value,save){
 const root=document.createElement("div");
 if(q.type==="lesson"){root.innerHTML='<div class="skill-explain">'+esc(q.prompt)+'</div><div class="video-box">🎬 <strong>Watch and discuss:</strong> <a href="'+esc(q.video)+'" target="_blank" rel="noopener noreferrer">'+esc(q.videoTitle||"Watch the video")+' ↗</a><p class="muted small">Open in a separate tab. Pause to discuss one useful idea with Laura.</p></div>';return root}
 if(q.type==="selfAssessment"){
 const data=Array.isArray(value)?[...value]:Array(q.options.length).fill(null);
 root.innerHTML='<p>Choose one answer per statement.</p>'+q.options.map((item,i)=>'<div class="assessment-row"><strong>'+(i+1)+'. '+esc(item)+'</strong><div class="assessment-options">'+levels.map((l,n)=>'<button type="button" data-i="'+i+'" data-n="'+n+'" class="'+(data[i]===n?"selected":"")+'">'+esc(l)+'</button>').join('')+'</div></div>').join('')+'<p class="small muted">This is a personal baseline, not a diagnosis or grade.</p>';
 root.querySelectorAll("[data-i]").forEach(btn=>btn.onclick=()=>{const i=+btn.dataset.i,n=+btn.dataset.n;data[i]=n;root.querySelectorAll('[data-i="'+i+'"]').forEach(b=>b.classList.toggle("selected",+b.dataset.n===n));save([...data])});
 return root}
 return root;
}
export function teacherWidget(q,value){
 if(q.type==="selfAssessment"){const data=Array.isArray(value)?value:[];return '<div class="assessment-report">'+q.options.map((item,i)=>'<p><strong>'+esc(item)+'</strong> — '+esc(data[i]===null||data[i]===undefined?"Not answered":levels[data[i]]||"Not answered")+'</p>').join('')+'</div>'}
 if(q.type==="lesson")return '<div class="skill-explain">'+esc(q.prompt)+'</div><p><a href="'+esc(q.video)+'" target="_blank" rel="noopener noreferrer">'+esc(q.videoTitle||"Video")+' ↗</a></p>';
 return null;
}
