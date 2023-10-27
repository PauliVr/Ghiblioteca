import { LitElement, html, css } from "lit";

export class HeaderLinks extends LitElement {

  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    .links-container{
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 10px 0;
      flex-direction: column;

      @media (min-width: 960px) {
        flex-direction: row;
      }

    }

    li{
      list-style-type: none;
      color: white;
      font-family: 'Courier New', Courier, monospace;
      font-size: 14px;
      font-weight: 600;
      margin: 0 5px;

      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }

    li:hover{
      color: #B0578D;
    }
  `;

  render(){

    return html`
      <div class='links-container'>
        <li>
          <a>Películas</a>
        </li>
        <li>
          <a>Personajes</a>
        </li>
        <li>
          <a>Locaciones</a>
        </li>
        <li>
          <a>Vehículos</a>
        </li>
      </div>
    `
  }
}

customElements.define('header-links', HeaderLinks);