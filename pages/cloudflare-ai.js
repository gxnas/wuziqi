// Cloudflare Workers AI bridge
async function analyzeWithAI(board, history){
  const r = await fetch('/api/analyze',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({board,history})
  });
  return await r.text();
}
