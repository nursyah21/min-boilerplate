import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

const counter = `
<div class="card" x-data="{counter: 0}">
  <button x-on:click="counter = counter+1" x-text="'count is '+counter"/>
</div>
`;

const layout = (e) => `
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
  </a>
  <h1>Hello Vite!</h1>
  ${e}
  <p class="read-the-docs">
  Click on the Vite logo to learn more
  </p>
</div>
`;

document.querySelector("#app").innerHTML = layout(`${counter}`);
