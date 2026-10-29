const courses=["🎤 Southernaires / Jazz Choir","🇪🇸 IB Spanish Language","📖 IB English Literature I HL","➗ IB Math Analysis I HL","🎻 Orchestra","⚛️ IB Physics I SL","🧠 Wellness Skills II","🎶 Symphonic Choir","🌎 IB History I HL"];
const fields=[["work","Current assignment / unit"],["due","Next due date"],["missing","Missing / incomplete work"],["status","Status"]];
const statuses=["","🟢 On track","🟡 Needs attention","🔴 Requires action"];
const escape=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
export function courseStudent(value,save){
 const v=value&&typeof value==="object"&&!Array.isArray(value)?value:{};
 let html='<div class="course-scroll"><table class="course-table"><thead><tr><th>Course</th>'+fields.map(f=>'<th>'+f[1]+'</th>').join('')+'</tr></thead><tbody>';
 courses.forEach((name,i)=>{const row=v["c"+i]||{};html+='<tr><th scope="row">'+escape(name)+'</th>';
 fields.forEach(([key])=>{html+='<td>';if(key==="status")html+='<select data-course="'+i+'" data-field="'+key+'">'+statuses.map(st=>'<option value="'+escape(st)+'" '+(row[key]===st?'selected':'')+'>'+escape(st||"Choose status")+'</option>').join('')+'</select>';else html+='<input data-course="'+i+'" data-field="'+key+'" value="'+escape(row[key]||"")+'" placeholder="'+(key==="due"?"Date or none":key==="missing"?"None / details":"Current update")+'">';html+='</td>'});html+='</tr>'});
 html+='</tbody></table></div><div class="course-reflect"><label>🎯 Which course needs attention first?<textarea data-reflect="priority" placeholder="Name the course and explain why.">'+escape(v.priority||"")+'</textarea></label><label>✅ What is your next specific action?<textarea data-reflect="action" placeholder="Choose one small, concrete step.">'+escape(v.action||"")+'</textarea></label><label>📅 When will you do it?<input data-reflect="when" placeholder="Day and time" value="'+escape(v.when||"")+'"></label></div>';
 const host=document.createElement("div");host.innerHTML=html;let timer;
 const change=()=>{clearTimeout(timer);timer=setTimeout(()=>save(structuredClone(v)),500)};
 host.querySelectorAll("[data-course]").forEach(el=>{const handler=()=>{const id="c"+el.dataset.course;v[id]??={};v[id][el.dataset.field]=el.value;change()};el.addEventListener(el.tagName==="SELECT"?"change":"input",handler)});
 host.querySelectorAll("[data-reflect]").forEach(el=>el.addEventListener("input",()=>{v[el.dataset.reflect]=el.value;change()}));
 return host;
}
export function courseTeacher(value){
 const v=value&&typeof value==="object"&&!Array.isArray(value)?value:{};
 let html='<div class="course-scroll"><table class="course-table"><thead><tr><th>Course</th>'+fields.map(f=>'<th>'+f[1]+'</th>').join('')+'</tr></thead><tbody>';
 courses.forEach((name,i)=>{const row=v["c"+i]||{};html+='<tr><th scope="row">'+escape(name)+'</th>'+fields.map(([key])=>'<td>'+escape(row[key]||"—")+'</td>').join('')+'</tr>'});
 return html+'</tbody></table></div><p><strong>Priority:</strong> '+escape(v.priority||"Not answered")+'</p><p><strong>Next action:</strong> '+escape(v.action||"Not answered")+'</p><p><strong>When:</strong> '+escape(v.when||"Not answered")+'</p>';
}
