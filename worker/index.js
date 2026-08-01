export default {
async fetch(request,env){
if(request.method==="POST"){
const data=await request.json();

try{
const result=await env.AI.run(
"@cf/meta/llama-3.1-8b-instruct",
{
prompt:`你是五子棋AI。
棋盘:${JSON.stringify(data.board)}
返回JSON格式:
{"row":数字,"col":数字}
只返回JSON`
});

return Response.json(JSON.parse(result.response));
}catch(e){
return Response.json({row:7,col:7});
}
}

return new Response("GXNAS Gomoku AI Worker");
}
}
