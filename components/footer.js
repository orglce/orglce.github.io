class CustomFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
        <style>
          #divFooterContainer {
            padding: 10px;
            font-size: 25px;
          }
        </style>

        <div id="divFooterContainer">
          Kontakt
        </div>`;
    shadow.appendChild(wrapper);
  }
}

customElements.define("custom-footer", CustomFooter);
