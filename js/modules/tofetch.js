export default class ToFetch {
  constructor(url) {
    this.dataHeader = document.querySelector(".header");
    this.element = document.querySelector(".data");
    this.url = url;
    this.element.innerHTML = "<p>carregando</p>";
    this.dataHeader.innerHTML = "<p>carregando</p>";
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
    console.log(this.dados);
    this.renderData(this.dados);
    this.renderHeader(this.resposta.headers);
  }

  // renderizando dados na tela - até segundo nível de objetos
  renderData(data) {
    this.element.innerHTML = "";
    for (let key in data) {
      console.log(typeof data[key]);
      if (typeof data[key] !== "object") {
        this.element.innerHTML += `<li>${key} : ${data[key]}</li>`;
      } else {
        const title = `<li>${key}</li>`
        this.element.innerHTML += title;
        for (let key2 in data[key]) {
          const values = `<li>${key2} - ${JSON.stringify(data[key][key2])}</li>`
          this.element.innerHTML += values;
        }
      }
    }
  }

  renderHeader(header) {
    this.dataHeader.innerText = "";
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
