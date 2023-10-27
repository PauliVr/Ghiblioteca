import { LitElement, html, css } from "lit";
import './Components/API/fetch-api';
import './Components/Cards/card-img';
import './Components/Cards/card-title';

export class Giblioteca extends LitElement{
  static properties() {
    allFilms: {type: Array}
  }

  static styles=css`
    :host{
      display: block;
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 0;
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #FFFFFF;
      width: 190px;
      margin: 15px 0;
    }

    .card-img{
      margin-top: 20px;
      width: 70%;
    }

    
  `;

  constructor() {
    super();
    this.allFilms = [];
  }

  _formatData({ detail }) {
    // console.log(detail.data, 'DATA');
    let films = [];

    detail.data.forEach((film) => {
      films.push({
        title: film.title,
        original_title: film.original_title,
        img: film.image,
        director: film.director,
        productor: film.producer,
        release: film.release_date,
        reating_score: film.rt_score,
        description: film.description
      })
    });

    this.allFilms = films;
    this.requestUpdate();
  }

  filmTemplate() {
    return this.allFilms.map( film => html`
        <div class='card'>
          <card-img src=${film.img} ></card-img>
          <card-title title=${film.title}></card-title>
        </div>
      `);
  }

  render() {
    return html`
      <section class='container'>
        <fetch-api
        url="https://ghibliapi.vercel.app/films"
        method="GET"
        @ApiData=${this._formatData}
        >
        </fetch-api>
        ${this.filmTemplate()}
      </section>
    `;
  }

}

customElements.define('index-giblioteca', Giblioteca);