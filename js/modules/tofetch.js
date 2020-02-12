export default class ToFetch {
  constructor() {
    this.dataHeader = document.querySelector(".header");
    this.element = document.querySelector(".data");
    this.element.innerHTML = "<p>carregando</p>";
    this.dataHeader.innerHTML = "<p>carregando</p>";
    this.search = document.querySelector(".input-search");
    this.check = document.querySelector('.checkbox');
    console.log(this.check);
  }

  searchEvent() {
    this.search.addEventListener("change", event => {
      this.anyFetch(event.target.value);
    });
  }

  /*---------------------------------------------------------------------*/

 /*  checkEvent(){
    this.check.addEventListener('change', ()=>{
      console.log('clicou');
      console.log(event.target)
      if(this.check.checked) {
        console.log('checado')
      }
    })
  } */

  /*---------------------------------------------------------------------*/

  // OUTRA FORMA:
  
/*    searchEvent() {
    this.search.addEventListener("change", (event) => {
      this.callbackSearch(event)});
  }

  callbackSearch(){
    console.log(this);
    this.anyFetch(event.target.value);
  } */

  /*---------------------------------------------------------------------*/

  //Forma errada

 /*  searchEvent() {
    this.search.addEventListener("change", this.callbackSearch);
  }

  callbackSearch(event){
    this.anyFetch(event.target.value);
  } */
 
/*---------------------------------------------------------------------*/

  async anyFetch(url = "https://api.myjson.com/bins/xi3hi") {
    this.url = url;
    try {
      this.resposta = await fetch(this.url);
      console.log(this.resposta.status);
      this.dados = await this.resposta.json();
    } catch (erro) {
      console.log(erro);
    }
    if (this.resposta.status === 200) {
      this.renderHeader(this.resposta.headers);
      this.renderData(this.dados);
    } else {
      this.element.innerHTML = `URL ${this.resposta.url} não válida`;
      this.dataHeader.innerHTML = "Não encontrado";
    }
  }

  renderData(data) {
    this.element.innerHTML = "";
    let arrayData = Object.entries(data);
    arrayData.map(item => {
      const ul = document.createElement("ul");
      ul.classList.add("ulList");
      let li1 = document.createElement("li");
      li1.innerText = `${item[0]}`;
      li1.classList.add("head");
      ul.append(li1);
      if (typeof item[1] === "object" && typeof item[1] !== null ) {
        const dataObject = Object.entries(item[1]);
        dataObject.map((dataItem, index) => {
          let li2 = document.createElement("li");
          li2.innerText = `${dataItem[0]} : ${dataItem[1]}`;
          ul.append(li2);
        });
      }
      this.element.appendChild(ul);
    });
  }

  renderHeader(header) {
    this.dataHeader.innerText = "";
    for (let [key, value] of header) {
      this.dataHeader.innerHTML += `<p>${key} : ${value}</p>`;
    }
  }

 /*  bindCallback() {
    this.callbackSearch = this.callbackSearch.bind(this);
  }  */



  // inicializando
  init() {
    this.anyFetch();
  this.searchEvent();
    this.search.focus();
   /*  this.checkEvent() */
    /* this.bindCallback();  */
    return this;
  }
}
