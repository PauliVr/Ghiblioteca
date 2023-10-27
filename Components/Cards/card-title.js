import { LitElement, html, css } from "lit";

export class CardTitle extends LitElement {

  static styles =css`
  :host{
      display: block;
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    .card-tittle{
      font-size: 18px;
      color:#B0578D;
      text-align: center;
      font-family: 'Sometype Mono', monospace;
    }
  `
  static properties = {
    title: {type:String}
  }

  render(){
    return html `
      <h1 class='card-tittle'>${this.title}</h1>
    `;
  }
}

customElements.define('card-title', CardTitle);