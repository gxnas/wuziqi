const size=15;
let board=[];
let player="black";

function init(){
board=Array.from({length:size},()=>Array(size).fill(""));
const el=document.getElementById("board");
el.innerHTML="";
for(let r=0;r<size;r++){
 for(let c=0;c<size;c++){
  let d=document.createElement("div");
  d.className="cell";
  d.onclick=()=>move(r,c);
  el.appendChild(d);
 }
}
render();
}

function render(){
document.querySelectorAll(".cell").forEach((e,i)=>{
 let v=board[Math.floor(i/size)][i%size];
 e.className="cell "+v;
});
}

async function move(r,c){
if(board[r][c])return;
board[r][c]=player;
render();
player="white";
await aiMove();
}

async function aiMove(){
document.getElementById("status").innerText="AI思考中...";
try{
let res=await fetch("/api/ai",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({board})
});
let m=await res.json();
if(board[m.row][m.col]=="")
 board[m.row][m.col]="white";
}catch(e){
fallback();
}
player="black";
document.getElementById("status").innerText="你的回合";
render();
}

function fallback(){
for(let r=0;r<size;r++)
for(let c=0;c<size;c++)
if(!board[r][c]){board[r][c]="white";return;}
}

function restart(){init()}
init();
