class CustomHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
        <style>
          #divHeaderContainer {
            padding: 10px;
            display: flex;
          }
          #divHeaderSeparator {
            flex-grow: 1;
          }
          #divHeaderTitle {
            font-size: 25px;
          }
          #divHeaderButtons {
            flex-grow: 0;
          }
        </style>

        <div id="divHeaderContainer">
          <div id="divHeaderTitle">
            Zavetišče
          </div>
          <div id="divHeaderSeparator"></div>
          <div id="divHeaderButtons">
            <a href="index.html">Domov</a>
            <a href="mucki.html">Mucki</a>
            <a href="blog.html">Blog</<a>
          </div>
        </div>`;
    shadow.appendChild(wrapper);
  }
}

customElements.define("custom-header", CustomHeader);
