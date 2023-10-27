import {LitElement, html, css} from 'lit';
import { HeaderIcons } from './header-icons';
import { HeaderLinks } from './header-links';

export class AtomicHeader extends LitElement {
  static styles = [
    css`
    :host {
      display: block;
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

      .main-header{
        display: flex;
        flex-direction: column; 
        align-items: center;
        background-color: #D988B9;
        width: 100%;

        @media (min-width: 768px) {
          flex-direction: row;
        }

        @media (min-width: 1280px) {
          justify-content: space-between;
        }
      }
    `
  ];

  // constructor() {
  //   super();
  // }

  // static properties = {

  // };

  render(){
    return html`
      <div class='main-header'>
        <header-icons></header-icons>
        <header-links></header-links>
      </div>
      `
  }
}

customElements.define('atomic-header', AtomicHeader);