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
    this.dados = await this.resposta.json();
    this.renderHeader(this.resposta.headers);
    this.arrayData(this.dados);
  }

  arrayData(data) {
    this.element.innerHTML = "";
    let arrayData = Object.entries(data);
    arrayData.map(item => {
      const ul = document.createElement("ul");
      let li1 = document.createElement("li");
      li1.innerText = `${item[0]}`;
      li1.classList.add('head')
      ul.append(li1);
      if (typeof item[1] === "object") {
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

  // inicializando
  init() {
    this.anyFetch();
    return this;
  }
}
