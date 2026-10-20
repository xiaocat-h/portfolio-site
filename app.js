const p=window.portfolio;
const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text)n.textContent=text;if(cls)n.className=cls;return n};
function link(label,url){if(!url)return el('span',label+' — coming soon','unavailable');let u;try{u=new URL(url,document.baseURI)}catch{return el('span','Invalid URL — update content.js','unavailable')}if(!['https:','mailto:'].includes(u.protocol))return el('span','URL unavailable','unavailable');const a=el('a',label+' ↗','text-link');a.href=u.href;if(label==='Live Demo')a.classList.add('demo-link');if(u.protocol==='https:'){a.target='_blank';a.rel='noopener noreferrer'}return a}
document.querySelector('#name').textContent=`Hello, I'm ${p.name}.`;document.querySelector('#bio').textContent=p.bio;document.querySelector('.logo').firstChild.textContent=p.initials;document.title=p.name+' — Portfolio';document.querySelector('#copyright').textContent=`© ${new Date().getFullYear()} ${p.name}`;
function render(filter='all'){const root=document.querySelector('#projects');root.replaceChildren();p.projects.filter(x=>filter==='all'||x.category===filter).forEach(x=>{const card=el('article',null,'project');const art=el('div',null,'project-art '+x.visual);art.setAttribute('aria-hidden','true');art.append(el('span',x.number,'art-number'));const mock=el('div',null,'mock');if(x.image){const img=el('img');img.src=x.image;img.alt='';img.className='project-logo';mock.append(img)}mock.append(el('small',x.category==='cms'?'CONTENT / STRUCTURE':x.category==='seo'?'SEARCH / VISIBILITY':'DESIGN / LOGIC'),el('strong',x.preview|| (x.category==='cms'?'A WordPress\nproject':x.category==='seo'?'Search &\nvisibility':'Built from\nscratch')),el('div',null,'mock-line'));if(x.screenshot){art.classList.add('screenshot-art');const shot=el('img');shot.src=x.image;shot.alt='';shot.className='project-screenshot';art.replaceChildren(shot)}else{art.append(mock)}card.append(art,el('p',x.status?x.label:x.label+' · TEMPLATE','eyebrow'),el('h3',x.title),...(x.projectName?[el('p',x.projectName,'project-name')]:[]),el('p',x.summary));const tags=el('div',null,'tags');x.tags.forEach(t=>tags.append(el('span',t)));card.append(tags);const btn=el('button','View case study ↗','case-link');btn.onclick=()=>{const body=document.querySelector('#detail-body');body.replaceChildren(el('p',x.status||'PROJECT TEMPLATE','eyebrow'),el('h2',x.title));(x.detailSections||[['The problem',x.problem],['My approach',x.approach],['Evidence & Results',x.evidence]]).forEach(([t,v])=>body.append(el('h3',t),el('p',v)));if(x.image&&x.screenshot){const img=el('img');img.src=x.image;img.alt=(x.projectName||x.title)+' original website screenshot';img.className='detail-screenshot';body.append(img,link('View full screenshot',new URL(x.image,document.baseURI).href))}if(x.live)body.append(link('Live Demo',x.live));if(x.source)body.append(el('br'),link('GitHub source',x.source));if(!x.live&&!x.source)body.append(el('p','Screenshot showcase · live link to follow','note'));body.querySelector('h2').id='project-detail-title';document.querySelector('#details').showModal();body.scrollTop=0};card.append(btn);if(x.category==='cms'&&x.image){card.append(el('p','Screenshot showcase · site migration pending','note'))}else{card.append(link('Live Demo',x.live),link('Source',x.source))};root.append(card)})}
render();document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render(b.dataset.filter)});
let qualificationGroup='';
p.qualifications.forEach(q=>{
 const root=document.querySelector('#qualifications');
 if(q.group!==qualificationGroup){qualificationGroup=q.group;root.append(el('h3',q.group||'Qualifications','qualification-group'))}
 const row=el('div',null,'qualification');const info=el('div',null,'qualification-info');
 info.append(el('h3',q.title),el('p',q.issuer));
 if(q.details)info.append(el('p',q.details,'qualification-details'));
 if(q.dates)info.append(el('p',q.dates,'qualification-dates'));
 row.append(info);const actions=el('div',null,'qualification-actions');
 if(q.status)actions.append(el('span',q.status,'status'));
 if(q.url)actions.append(link('View credential',q.url));
 if(actions.childNodes.length)row.append(actions);root.append(row);
});
const contactIcons={
GitHub:'<path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.55v-2.15c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.09 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.57-.29-5.27-1.29-5.27-5.72 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.42-5.28 5.71.42.36.79 1.06.79 2.15v3.18c0 .3.21.67.8.55A11.5 11.5 0 0 0 12 .7Z"/>',
LinkedIn:'<path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.31h.04c.39-.75 1.36-1.55 2.79-1.55 2.99 0 3.58 1.97 3.58 4.53v5.26Z"/>',
Email:'<path d="M3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.5l9 6 9-6V6H3Zm18 12V9l-9 6-9-6v9h18Z"/>'};
function contactLink(label,url){
 const n=url?link(label,url):el('span',null,'contact-pending');
 n.replaceChildren();n.className='contact-channel'+(url?'':' contact-pending');
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');svg.innerHTML=contactIcons[label];
 n.append(svg,el('span',label),el('span',url?'↗':'Details pending','channel-state'));
 if(url)n.setAttribute('aria-label',label==='GitHub'?'GitHub profile':label);else n.setAttribute('aria-disabled','true');
 return n;
}
const contacts=document.querySelector('#contact-links');contacts.append(contactLink('GitHub',p.github),contactLink('LinkedIn',p.linkedin),contactLink('Email',p.email?'mailto:'+p.email:''));
if(p.blog){const blogLink=link('Blog',p.blog);if(blogLink.tagName==='A'){blogLink.className='blog-nav';document.querySelector('nav[aria-label="Main navigation"]').append(blogLink)}}
document.querySelector('#close-dialog').onclick=()=>document.querySelector('#details').close();

// Coursework is kept separate from the web project filters.
(p.mlProjects||[]).forEach(project=>{
 const card=el('article',null,'ml-card');
 card.append(el('p',project.status,'eyebrow'),el('h3',project.title),el('p',project.summary));
 const facts=el('dl',null,'ml-facts');
 [['Data & task',project.dataset],['Training',project.training],['Evaluation',project.evaluation]].forEach(([label,value])=>{facts.append(el('dt',label),el('dd',value))});
 card.append(facts,project.source?link('GitHub code',project.source):el('p','GitHub code — upload pending','ml-pending'));
 document.querySelector('#ml-projects').append(card);
});

