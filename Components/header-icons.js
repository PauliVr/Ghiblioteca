import { LitElement, html, css } from "lit";

export class HeaderIcons extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }
    
    .icon-container{
      display: flex;
      color: white;
      align-items: center;
    }

    .header-img{
      width: 230px;
      height: 100px;
      
      @media (min-width: 1024px ){
        margin: 0 15px;
        width: 250px;
        height: 110px;
      }
    }
    
    .principal-title{
      font-family: 'Courier New', Courier, monospace;
      font-size: 24px;
      display: none; 

      @media (min-width: 1024px) {
        display: block;
      }
    }
  `;

  render(){
    return html`
      <div class='icon-container'>
        <img class='header-img' src="https://i.postimg.cc/FHMnx5gB/custom-Logo.png" alt='Totoro Icon'>
        <h1 class='principal-title'>Ghiblioteca</h1>
      </div>
    `
  }
}

customElements.define('header-icons', HeaderIcons);