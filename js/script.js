import ToFetch from "./modules/tofetch.js";

const tofetch = new ToFetch("https://blockchain.info/ticker");
tofetch.init();

/* setInterval(()=>{
  tofetch.init();
  console.log('atualização')
},1000) */

/* setInterval(tofetch.init(),1000); */

/* const tofetch = new ToFetch('https://api.myjson.com/bins/xi3hi');
tofetch.init(); */
