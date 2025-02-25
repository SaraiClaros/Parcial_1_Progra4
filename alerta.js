class AlertaDengue extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }); // Shadow DOM
  
      this.shadowRoot.innerHTML = `
        <style>
          .alerta {
            background-color: #ffdddd;
            color: #b30000;
            padding: 15px;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            border-radius: 8px;
            border: 2px solid #b30000;
            margin: 15px 0;
          }
        </style>
        <div class="alerta">
          ⚠ ¡ALERTA! Elimina criaderos de mosquitos para evitar el dengue. 🦟
        </div>
      `;
    }
  }

  customElements.define("alerta-dengue", AlertaDengue);

  