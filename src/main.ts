import { initDelegateListener } from "./scripts/eventListeners";
import "./style.scss";




const appRoot = document.querySelector<HTMLElement>('.js-interaction-container');

if (appRoot) {
  initDelegateListener(appRoot);
}