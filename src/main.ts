import "./style.scss";

// all of this content needs moving out of the index.ts file, and into separate files, and then imported in here.
// This file should just be the entry point, and should import all the other files,
// and call any functions that need to be called on page load.

type formElements = {
  interactionContainer: HTMLDivElement | null;
  form: HTMLFormElement | null | undefined;
  input: HTMLInputElement | null | undefined;
  addButton: HTMLButtonElement | null | undefined;
  toDoList: HTMLUListElement | null;
  doneList: HTMLUListElement | null;
};

// get this in a function, in a new file, and call that function on pageload
const getFormElements = (): formElements => {
  const interactionContainer = document.querySelector<HTMLDivElement>(
    ".interaction-container",
  );
  const form = interactionContainer?.querySelector<HTMLFormElement>("form");
  const input = form?.querySelector<HTMLInputElement>('input[type="text"]');
  const addButton = form?.querySelector<HTMLButtonElement>("button");
  const toDoList = document.querySelector<HTMLUListElement>(".to-do-list");
  const doneList = document.querySelector<HTMLUListElement>(".done-list");

  return {
    interactionContainer,
    form,
    input,
    addButton,
    toDoList,
    doneList,
  };
};

const addFormSubmitListener = (
  form: HTMLFormElement | null | undefined,
  input: HTMLInputElement | null | undefined,
) => {
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted with input:", input?.value);
    console.log("test complete");
  });
};

const setupTodoForm = () => {
  const { form, input, addButton, toDoList, doneList } = getFormElements();
  if (form && input) {
    addFormSubmitListener(form, input);
  }
};

setupTodoForm();
