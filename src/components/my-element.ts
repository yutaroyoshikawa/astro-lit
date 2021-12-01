import { html, LitElement } from "lit";

export const tagName = "my-element";

class MyElement extends LitElement {
  render() {
    return html` <p>Hello world!</p> `;
  }
}

customElements.define(tagName, MyElement);
