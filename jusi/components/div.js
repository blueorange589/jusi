// Create a class for the element
'use strict';

(function() {
class JusiDiv extends HTMLDivElement {
  constructor() {
    // Always call super first in constructor
    // Return value from super() is a reference to this element
    self = super();
    this.render = this.render.bind(this);
    console.log('jusidiv') 

  }

  connectedCallback() {
    console.log('jusidiv') 
    
    // binding methods
  }

  render(data, template) {
    console.log(template)
  }
}

// <ul is="expanding-list">
// Define the new element
customElements.define("jusi-div", JusiDiv, { extends: "div" });
})();