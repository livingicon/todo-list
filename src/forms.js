import { addElements, deleteElements, editElements } from "./ui";
import loadProjects from "./projects";

const addForms = (function () {
  // ADD PROJECT FORM FUNCTION
  const addProjectForm = function (e) {
    // get
    const projects = document.getElementById("projects");
    // create
    const projectForm = document.createElement("form");
    const projectFormDiv = document.createElement("div");
    const projectFormLabel = document.createElement("label");
    const projectFormInput = document.createElement("input");
    const projectFormSaveBtn = document.createElement("button");
    const projectFormCancelBtn = document.createElement("button");
    // add attributes
    projectForm.setAttribute("id", "projectForm");
    projectFormDiv.setAttribute("id", "projectFormDiv");
    projectFormLabel.setAttribute("for", "project");
    projectFormLabel.textContent = "Project Name";
    projectFormInput.setAttribute("type", "text");
    projectFormInput.setAttribute("id", "project");
    projectFormInput.setAttribute("placeholder", "project name");
    projectFormSaveBtn.setAttribute("id", "projectFormSaveBtn");
    projectFormSaveBtn.setAttribute("type", "submit");
    projectFormSaveBtn.textContent = "save";
    projectFormSaveBtn.style.backgroundColor = "var(--later)";
    projectFormCancelBtn.setAttribute("id", "projectCancelBtn");
    projectFormCancelBtn.setAttribute("type", "button");
    projectFormCancelBtn.textContent = "cancel";
    projectFormCancelBtn.style.backgroundColor = "var(--urgent)";
    // append
    projects.innerHTML = "";
    projects.appendChild(projectForm);
    projectForm.appendChild(projectFormDiv);
    projectFormDiv.appendChild(projectFormLabel);
    projectFormDiv.appendChild(projectFormInput);
    projectForm.appendChild(projectFormSaveBtn);
    projectForm.appendChild(projectFormCancelBtn);
    // listen
    projectFormSaveBtn.addEventListener("click", addElements.addProject);
    projectFormCancelBtn.addEventListener("click", loadProjects.addAllProjects);
  };

  // ADD TODO FORM FUNCTION
  const addToDoForm = function (e) {
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem("myProjects"));
    // --todo form
    const projects = document.getElementById("projects");
    const toDoForm = document.createElement("form");
    const toDoFormDiv = document.createElement("div");
    toDoForm.setAttribute("id", "toDoForm");
    // --todo title
    const toDoFormTitleDiv = document.createElement("div");
    const toDoFormTitleLabel = document.createElement("label");
    const toDoFormTitleInput = document.createElement("input");
    toDoFormTitleLabel.setAttribute("for", "title");
    toDoFormTitleLabel.textContent = "To Do Item Title";
    toDoFormTitleInput.setAttribute("type", "text");
    toDoFormTitleInput.setAttribute("id", "title");
    if (e.target.id === "editToDo") {
      toDoFormTitleInput.setAttribute(
        "value",
        `${
          myProjects[e.target.getAttribute("data-position")].toDoArray[
            e.target.getAttribute("data-todo")
          ].title
        }`
      );
    } else {
      toDoFormTitleInput.setAttribute("placeholder", "title");
    }
    // --todo description
    const toDoFormDescriptionDiv = document.createElement("div");
    const toDoFormDescriptionLabel = document.createElement("label");
    const toDoFormDescriptionInput = document.createElement("input");
    toDoFormDescriptionLabel.setAttribute("for", "descripton");
    toDoFormDescriptionLabel.textContent = "To Do Item Description";
    toDoFormDescriptionInput.setAttribute("type", "text");
    toDoFormDescriptionInput.setAttribute("id", "description");
    if (e.target.id === "editToDo") {
      toDoFormDescriptionInput.setAttribute(
        "value",
        `${
          myProjects[e.target.getAttribute("data-position")].toDoArray[
            e.target.getAttribute("data-todo")
          ].description
        }`
      );
    } else {
      toDoFormDescriptionInput.setAttribute("placeholder", "description");
    }
    // --todo due-date
    const toDoFormDueDateDiv = document.createElement("div");
    const toDoFormDueDateLabel = document.createElement("label");
    const toDoFormDueDateInput = document.createElement("input");
    toDoFormDueDateLabel.setAttribute("for", "due-date");
    toDoFormDueDateLabel.textContent = "To Do Item Due Date";
    toDoFormDueDateInput.setAttribute("type", "date");
    toDoFormDueDateInput.setAttribute("id", "due-date");
    if (e.target.id === "editToDo") {
      toDoFormDueDateInput.setAttribute(
        "value",
        `${
          myProjects[e.target.getAttribute("data-position")].toDoArray[
            e.target.getAttribute("data-todo")
          ].date
        }`
      );
    } else {
      let today = new Date().toISOString().slice(0, 10);
      toDoFormDueDateInput.setAttribute("value", `${today}`);
    }
    // --todo priority
    const toDoFormPriorityDiv = document.createElement("div");
    const toDoFormPriorityLabel = document.createElement("label");
    const toDoFormPrioritySelect = document.createElement("select");
    const priorityNow = document.createElement("option");
    const prioritySoon = document.createElement("option");
    const priorityLater = document.createElement("option");
    const priorityCompleted = document.createElement("option");
    toDoFormPriorityLabel.setAttribute("for", "priority");
    toDoFormPriorityLabel.textContent = "To Do Item Priority";
    toDoFormPrioritySelect.setAttribute("id", "priority");
    priorityNow.setAttribute("value", "urgent");
    priorityNow.setAttribute("id", "priorityNow");
    priorityNow.textContent = "Urgent";
    priorityNow.style.backgroundColor = "var(--urgent)";
    prioritySoon.setAttribute("value", "soon");
    prioritySoon.setAttribute("id", "prioritySoon");
    prioritySoon.textContent = "Soon";
    prioritySoon.style.backgroundColor = "var(--soon)";
    priorityLater.setAttribute("value", "later");
    priorityLater.setAttribute("id", "priorityLater");
    priorityLater.textContent = "Later";
    priorityLater.style.backgroundColor = "var(--later)";
    priorityCompleted.setAttribute("value", "completed");
    priorityCompleted.setAttribute("id", "priorityCompleted");
    priorityCompleted.textContent = "Completed";
    priorityCompleted.style.backgroundColor = "var(--project-light)";
    // selected default on edit
    if (
      e.target.id === "editToDo" &&
      myProjects[e.target.getAttribute("data-position")].toDoArray[
        e.target.getAttribute("data-todo")
      ].priority === "urgent"
    ) {
      priorityNow.setAttribute("selected", "selected");
    } else if (
      e.target.id === "editToDo" &&
      myProjects[e.target.getAttribute("data-position")].toDoArray[
        e.target.getAttribute("data-todo")
      ].priority === "soon"
    ) {
      prioritySoon.setAttribute("selected", "selected");
    } else if (
      e.target.id === "editToDo" &&
      myProjects[e.target.getAttribute("data-position")].toDoArray[
        e.target.getAttribute("data-todo")
      ].priority === "later"
    ) {
      priorityLater.setAttribute("selected", "selected");
    } else if (
      e.target.id === "editToDo" &&
      myProjects[e.target.getAttribute("data-position")].toDoArray[
        e.target.getAttribute("data-todo")
      ].priority === "completed"
    ) {
      priorityCompleted.setAttribute("selected", "selected");
    } else {
      priorityNow.setAttribute("selected", "selected");
    }
    // --todo save button
    const toDoFormSaveBtn = document.createElement("button");
    toDoFormSaveBtn.setAttribute("id", "toDoFormSaveBtn");
    toDoFormSaveBtn.setAttribute("type", "submit");
    toDoFormSaveBtn.textContent = "save";
    toDoFormSaveBtn.style.backgroundColor = "var(--later)";
    const cardDisplay = document.getElementById(
      e.target.getAttribute("data-position")
    ).style.display;
    toDoFormSaveBtn.setAttribute("data-display", `${cardDisplay}`);
    let position = e.target.getAttribute("data-position");
    toDoFormSaveBtn.setAttribute("data-position", `${position}`);
    if (e.target.id === "editToDo") {
      toDoFormSaveBtn.setAttribute(
        "data-todo",
        `${e.target.getAttribute("data-todo")}`
      );
    }

    // --todo cancel button
    const toDoFormCancelBtn = document.createElement("button");
    toDoFormCancelBtn.setAttribute("id", "toDoCancelBtn");
    toDoFormCancelBtn.setAttribute("type", "button");
    toDoFormCancelBtn.textContent = "cancel";
    toDoFormCancelBtn.style.backgroundColor = "var(--urgent)";
    toDoFormCancelBtn.setAttribute("data-position", `${position}`);
    // append
    projects.innerHTML = "";
    projects.appendChild(toDoForm);
    toDoForm.appendChild(toDoFormDiv);
    toDoFormDiv.appendChild(toDoFormTitleDiv);
    toDoFormTitleDiv.appendChild(toDoFormTitleLabel);
    toDoFormTitleDiv.appendChild(toDoFormTitleInput);
    toDoFormDiv.appendChild(toDoFormDescriptionDiv);
    toDoFormDescriptionDiv.appendChild(toDoFormDescriptionLabel);
    toDoFormDescriptionDiv.appendChild(toDoFormDescriptionInput);
    toDoFormDiv.appendChild(toDoFormDueDateDiv);
    toDoFormDueDateDiv.appendChild(toDoFormDueDateLabel);
    toDoFormDueDateDiv.appendChild(toDoFormDueDateInput);
    toDoFormDiv.appendChild(toDoFormPriorityDiv);
    toDoFormPriorityDiv.appendChild(toDoFormPriorityLabel);
    toDoFormPriorityDiv.appendChild(toDoFormPrioritySelect);
    toDoFormPrioritySelect.appendChild(priorityNow);
    toDoFormPrioritySelect.appendChild(prioritySoon);
    toDoFormPrioritySelect.appendChild(priorityLater);
    toDoFormPrioritySelect.appendChild(priorityCompleted);
    toDoFormDiv.appendChild(toDoFormSaveBtn);
    toDoFormDiv.appendChild(toDoFormCancelBtn);
    // listeners
    if (cardDisplay === "") {
      toDoFormCancelBtn.addEventListener("click", loadProjects.addAllProjects);
    } else {
      toDoFormCancelBtn.addEventListener("click", cancelEditProjects);
    }
    toDoFormSaveBtn.addEventListener("click", addElements.addToDo);
  };

  const cancelEditProjects = function (e) {
    let myProjects = [];
    myProjects = JSON.parse(localStorage.getItem("myProjects"));
    loadProjects.addAllProjects();
    for (let i = 0; i < myProjects.length; i++) {
      if (
        myProjects[i] === myProjects[e.target.getAttribute("data-position")]
      ) {
        let nonHidden = document.getElementById(`${i}`);
        nonHidden.style.display = "block";
      } else {
        let hidden = document.getElementById(`${i}`);
        hidden.style.display = "none";
      }
    }
    const showAllProjectsBtn = document.getElementById("showAllProjectsBtn");
    showAllProjectsBtn.style.display = "block";
    showAllProjectsBtn.addEventListener("click", loadProjects.addAllProjects);
  };

  return { addProjectForm, addToDoForm };
})();

export default addForms;
