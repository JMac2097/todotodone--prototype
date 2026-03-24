import { handleFormSubmit } from "./todoForm";

export const initDelegateListener = (root: HTMLElement) => {
  root.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    console.log("Clicked element:", target);
  });
  root.addEventListener("submit", (event) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    console.log("Submitted element:", target);
    handleFormSubmit(event);
  });
};
