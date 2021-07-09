(() => {
  let theme = 0;
  const themes = ["grey", "light", "dark"];
  const showCurrentTheme = () => {
    document.documentElement.setAttribute("data-theme", themes[theme]);
  };

  const setTheme = (num) => () => {
    theme = num;
    showCurrentTheme();
  };

  let el = document.getElementById("theme1");
  el.addEventListener("click", setTheme(0), false);
  el = document.getElementById("theme2");
  el.addEventListener("click", setTheme(1), false);
  el = document.getElementById("theme3");
  el.addEventListener("click", setTheme(2), false);
})();
