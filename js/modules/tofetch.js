export default class ToFetch {
  constructor(url) {
    this.url = url;
  }

  async anyFetch() {
    this.response = await fetch(this.url);
    this.data = await this.response.json();
    //return this.data.BRL.sell;
    return this.data;
  }
  
  get mostrarData() {
    return this.valor = {
      valor: this.anyFetch(),
    }
  }

  renderHeaders(){
    
  }

  init() {
    this.anyFetch();
    //this.mostrarData();
    return this;
  }
}
  

