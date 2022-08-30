const faviconTag = document.getElementById("faviconTag_home");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

const changeFavicon = () => {
  if (isDark.matches) faviconTag.href = "/Images/Dark_Icon.svg";
  else faviconTag.href = "/Images/Light_Icon.svg";
};

changeFavicon();

setInterval(changeFavicon, 1000);
