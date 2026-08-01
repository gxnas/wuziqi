import coach from './coach.js';

export default {
 async fetch(request, env){
   if(request.method === 'POST'){
     return coach(request, env);
   }
   return new Response('GXNAS Gomoku Worker');
 }
}
