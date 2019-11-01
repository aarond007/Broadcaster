// project title
const div =document.createElement("div");
const subdiv =document.createElement("div");
const span=document.createElement("span");
const btn=document.createElement("button");
div.classList.add('container');
span.classList.add('title');
span.textContent="Broadcaster";
subdiv.classList.add('top');
document.body.appendChild(div);
div.appendChild(subdiv);
subdiv.appendChild(span);
btn.classList.add('btn');
btn.classList.add('logoutbtn');
btn.textContent="logout";
subdiv.appendChild(btn);
const task=document.querySelector('.tasks');
div.appendChild(document.querySelector('.task-title'));
div.appendChild(task);
// default
let deft="redflag";
// red flag or intervention
const flag=document.querySelectorAll('.flag-title');
const redflag=document.querySelector('.flag-title.red');
const int=document.querySelector('.flag-title.int');
redflag.classList.add('active');
const content=(contentvalue)=>{
	var listitem=["resolved", "under investigation", "rejected"];
	document.querySelector('.btnnew').textContent=`New ${contentvalue}`
	const li=document.querySelectorAll('.redflags');
	li.forEach((list, index)=>{
		list.textContent=`${contentvalue} ${listitem[index]}`;
	})
	document.querySelector('.redflagbtn').textContent=`Create ${contentvalue}`	;
};
content(deft);
flag.forEach((menu)=>{
	menu.addEventListener('click',(e)=>{
		if(e.target==redflag){
			deft="red-flag";
			redflag.classList.add('active');
			int.classList.remove('active');
			content(deft);
		}
		else{
			deft="intervention";
			redflag.classList.remove('active');
			int.classList.add('active');
			content(deft);
		}	
	})



})

