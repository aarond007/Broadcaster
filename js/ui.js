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
div.appendChild(document.querySelector('.footer'));
//switch displays
const contentdisplays=(par)=>{
	if(par=="btn"){
		document.querySelector(".redflagcontainer").style.display="none";
		document.querySelector(".redflagcontent").style.display="block";
		document.querySelector(".viewredflag").style.display="none";
	}
	else if(par=="li"){
		document.querySelector(".redflagcontainer").style.display="block";
		document.querySelector(".redflagcontent").style.display="none";
		document.querySelector(".viewredflag").style.display="none";
	}else{
		document.querySelector(".redflagcontainer").style.display="none";
		document.querySelector(".redflagcontent").style.display="none";
		document.querySelector(".viewredflag").style.display="block";
	}
}
// default
let deft="red-flag";
// red flag or intervention
const flag=document.querySelectorAll('.flag-title');
const redflag=document.querySelector('.flag-title.red');
const int=document.querySelector('.flag-title.int');
redflag.classList.add('active');
const content=(contentvalue)=>{
	const listitem=["resolved", "under investigation", "rejected", "list"];
	const btnnew=document.querySelector('.btnnew');
	btnnew.textContent=`New ${contentvalue}`
	btnnew.addEventListener('click', (e)=>{
		contentdisplays('btn');
	})
	const li=document.querySelectorAll('.redflags');
	li.forEach((list, index)=>{
		list.textContent=`${contentvalue} ${listitem[index]}`;
		list.addEventListener('click', (e)=>{
			contentdisplays('li');
		})
	})
	document.querySelector('.redflagbtn').textContent=`Create ${contentvalue}`	;
};

content(deft);
// switch menus
flag.forEach((menu)=>{
	menu.addEventListener('click',(e)=>{
		if(e.target==redflag){
			deft="red-flag";
			redflag.classList.add('active');
			int.classList.remove('active');
			content(deft);
			contentdisplays('btn');
		}
		else{
			deft="intervention";
			redflag.classList.remove('active');
			int.classList.add('active');
			content(deft);
			contentdisplays('btn');
		}	
	})
})
const redlist=document.querySelector('.redflaglist');
const redtitle=document.querySelectorAll('.redtitle');
const reddesc=document.querySelectorAll('.reddesc');
const redflagcontainer=document.querySelector('.redflagcontainer');
reddesc.forEach((desc)=>{
	desc.addEventListener('click',(e)=>{
		contentdisplays('message');
	})
})