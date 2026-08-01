export default async function(request, env){
 try{
  const data = await request.json();
  const result = await env.AI.run(
   '@cf/meta/llama-3.1-8b-instruct',
   {prompt:'分析这个五子棋局面并给出建议:'+JSON.stringify(data)}
  );
  return new Response(result.response);
 }catch(e){
  return new Response('AI分析暂时不可用');
 }
}
