import { LitElement, html, css } from "lit";

export class CardImg extends LitElement{
  static properties = {
    src: { type:String }
  }

  static styles=css`
    :host{
      display: block;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    .card-img {
      margin-top: 20px;
      width: 70%;
    }
  `

  render(){
    console.log(this.image, 'img');

    return html `
      <img class='card-img' src=${this.src}>
    `
  }
}

customElements.define('card-img', CardImg);