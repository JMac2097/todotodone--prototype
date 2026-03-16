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

    if (input && input.value.trim() !== "") {
      const { toDoList } = getFormElements();
      if (toDoList) {
        addToToDoList(toDoList, input.value.trim());
        input.value = ""; // Clear the input field after adding the task
      }
    }
  });
};

export const setupTodoForm = () => {
  const { form, input, addButton, toDoList, doneList } = getFormElements();
  if (form && input) {
    addFormSubmitListener(form, input);
  }
};

const addToToDoList = (toDoList: HTMLUListElement, task: string) => {
  const listItem = toDoListItemTemplate(task);
  toDoList.appendChild(listItem);
  // we need to check this, as we probably dont wqnt to add this listener every time we add a task, but for now it works
  // further breaking this out into smaller functions will help with this
  toDoList.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "BUTTON") {
      const listItem = target.parentElement as HTMLLIElement;
      listItem.remove();
      const { doneList } = getFormElements();
      if (doneList) {
        doneList.appendChild(listItem);
      }
    }
  });
};

const toDoListItemTemplate = (task: string): HTMLLIElement => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${task} <button>Done</button>`;
  return listItem;
};
