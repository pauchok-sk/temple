export default function headerToggle() {
  const header = document.querySelector(".header");

  if (header) {
    const btn = document.querySelector("#header-toggle-btn");
    const main = document.querySelector("#header-main");

    btn.addEventListener("click", () => {
      if (btn.classList.contains("_close")) {
        btn.classList.remove("_close");
        header.classList.remove("_open");

        setTimeout(() => {
          main.classList.add("_hide");
        }, 100)
      } else {
        btn.classList.add("_close");
        header.classList.add("_open");
        main.classList.remove("_hide");
      }
    });
  }
}
