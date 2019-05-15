import { DEFAULT_ICO_URL, DEFAULT_PAGE_TITLE } from "./config";

export function setWindowIcon(route) {
  (function() {
    var link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = route ? route : DEFAULT_ICO_URL;
    document.getElementsByTagName("head")[0].appendChild(link);
  })();
}

export function setWindowTitle(title) {
  if (document.title) {
    document.title = title;
  } else {
    document.title = DEFAULT_PAGE_TITLE;
  }
}
