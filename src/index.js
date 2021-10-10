import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    {/* We wrap the app with the StateProvider that we created so that every component will have access to the Data layer */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Background color changer
const bodyBG = document.querySelector("body");
const productBG = document.querySelectorAll(".product");
const BgBtn = document.querySelector(".change__BGcolor");
const productText = document.querySelectorAll(".about__product");
let colors = ["#000", "#f0f0f0", "rgb(144, 170, 162)", "#444545"];
BgBtn.addEventListener("click", () => {
  let randomColor = Math.floor(Math.random() * colors.length);
  bodyBG.style.backgroundColor = colors[randomColor];
  if (bodyBG.style.backgroundColor !== colors[0]) {
    productBG.forEach((product) => {
      product.style.backgroundColor = "#fff";
    });
    productText.forEach((product) => {
      product.style.color = "#000";
    });
  } else if (bodyBG.style.backgroundColor === colors[0]) {
    productBG.forEach((product) => {
      product.style.backgroundColor = "#60636380";
    });
    productText.forEach((product) => {
      product.style.color = "#fff";
    });
  }
});
/*/////// Banner Animated Text ///////*/
const animateText = () => {
  const textContainer = document.getElementById("animated__text");
  const feel = document.getElementById("feel");
  const priority = document.getElementById("priority");
  // debugger
  textContainer.innerHTML = feel.innerHTML;
  setInterval(() => {
    if (textContainer.innerHTML === feel.innerHTML) {
      textContainer.innerHTML = priority.innerHTML;
    } else {
      textContainer.innerHTML = feel.innerHTML;
    }
  }, 6000);
};

/* //////// Banner Animated Images ///////


/*/ //////// Show Search Bar //////////*/

/*///////// Menu Toggle /////////*/

const toggleBtn = document.querySelector(".toggle__icon");
const menu = document.querySelector(".mobile__header__nav");
const overlay = document.querySelector(".overlay");

const toggle = () => {
  if (menu.classList.contains("slide")) {
    menu.classList.remove("slide");
    overlay.classList.remove("hide");
  } else {
    menu.classList.add("slide");
    overlay.classList.add("hide");
  }
};

toggleBtn.addEventListener("click", () => toggle());
overlay.addEventListener("click", () => toggle());

window.onload = () => {
  animateText();
  /* animateImages(); */
};
