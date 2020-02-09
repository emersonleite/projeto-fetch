export default class ToFetch {
  constructor(url) {
    this.element = document.querySelector(".data");
    this.dataHeader = document.querySelector(".header");
    this.url = url;
  }

  async anyFetch() {
    this.resposta = await fetch(this.url);
    // retornando a url
    //console.log(this.resposta.url);
    // interando sobre o headers da resposta
    /*  for (let [key, value] of this.resposta.headers) {
      console.log(`${key}: ${value}`);
    } */
    // Recuperando o tipo de dado da resposta
    //console.log(this.resposta.headers.get("content-type"));
    //console.log(this.resposta.headers);
    this.dados = await this.resposta.json();
    // mostrando dados...
    console.log(this.dados);
    //return this.dados;
    this.renderData(this.dados);
    this.renderHeader(this.resposta.headers);
  }

  // renderizando dados na tela - até segundo nível de objetos
  renderData(data) {
this.element.innerHTML = '';
    for (let key in data) {
      console.log(typeof data[key]);
      if (typeof data[key] !== "object") {
        this.element.innerHTML += `<p>${key} : ${data[key]}</p>`;
      } else {
        this.element.innerHTML += `<p>${key}</p>`;
        for (let key2 in data[key]) {
          this.element.innerHTML +=  `<p>${key2} - ${data[key][key2]}</p>`;
        }
        this.element.innerHTML += `<br>`;
      }
    }
  }

  renderHeader(header) {
this.dataHeader.innerHTML = '';
    for (let [key, value] of header) {
      this.dataHeader.innerHTML += `<p>${key} : ${value}</p>`;
    }
  }

  // inicializando
  init() {
    this.anyFetch();
    return this;
  }
}
