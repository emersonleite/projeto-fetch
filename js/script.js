import ToFetch from './modules/tofetch.js';

const tofetch = new ToFetch('https://blockchain.info/ticker');
tofetch.init();


const tofetch02 = new ToFetch('https://api.myjson.com/bins/xi3hi');
tofetch02.init();