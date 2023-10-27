import { LitElement } from "lit";

export class Fetch extends LitElement {
  static properties = {
    url: { type:String },
    method: { type:String },
  };

  firstUpdated(){
    this.getData();
  }

  _sendData(data){
    this.dispatchEvent(new CustomEvent('ApiData', {
      detail: {data}, bubbles:true, composed:true
    }))
  }

  getData() {
    fetch(this.url, {method: this.method})
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => {this._sendData(data)})
      .catch((error) => {console.log('Something went wrong', error)});
  }
}

customElements.define('fetch-api', Fetch);