import { hide, show } from "./helpFunctions.js";

export default function headerList() {
  const items = document.querySelector(".header__list").querySelectorAll(".menu-item-has-children");

  if (items.length) {
    items.forEach(item => {
      const content = item.querySelector(".content");
      const btn = item.querySelector(".btn");

      hide(content);

      btn.addEventListener("click", () => {
        if (btn.classList.contains("_active")) {
          hide(content);
          btn.classList.remove("_active")
        } else {
          show(content);
          btn.classList.add("_active")
        }
      })
    })
  }
}