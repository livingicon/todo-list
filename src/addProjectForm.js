import {addProject, addAllProjects, addToDoItem} from "./index.js";

const addForms = (function() {

  const addToDoForm = function(e) {
    // todo title
    const toDoFormTitleDiv = document.createElement('div');
    const toDoFormTitleLabel = document.createElement('label');
    const toDoFormTitleInput = document.createElement('input');
    toDoFormTitleLabel.setAttribute('for', 'title');
    toDoFormTitleLabel.textContent = "To Do Item Title";
    toDoFormTitleInput.setAttribute('type', 'text');
    toDoFormTitleInput.setAttribute('id', 'title');
    toDoFormTitleInput.setAttribute('placeholder', 'title')
    // todo description
    const toDoFormDescriptionDiv = document.createElement('div');
    const toDoFormDescriptionLabel = document.createElement('label');
    const toDoFormDescriptionInput = document.createElement('input');
    toDoFormDescriptionLabel.setAttribute('for', 'descripton');
    toDoFormDescriptionLabel.textContent = "To Do Item Description";
    toDoFormDescriptionInput.setAttribute('type', 'text');
    toDoFormDescriptionInput.setAttribute('id', 'description');
    toDoFormDescriptionInput.setAttribute('placeholder', 'description')
    // todo due date
    const toDoFormDueDateDiv = document.createElement('div');
    const toDoFormDueDateLabel = document.createElement('label');
    const toDoFormDueDateInput = document.createElement('input');
    toDoFormDueDateLabel.setAttribute('for', 'due-date');
    toDoFormDueDateLabel.textContent = "To Do Item Due Date";
    toDoFormDueDateInput.setAttribute('type', 'date');
    toDoFormDueDateInput.setAttribute('id', 'due-date');
    // todo priority
    const toDoFormPriorityDiv = document.createElement('div');
    const toDoFormPriorityLabel = document.createElement('label');
    const toDoFormPrioritySelect = document.createElement('select');
    const priorityNow = document.createElement('option');
    const prioritySoon = document.createElement('option');
    const priorityLater = document.createElement('option');
    toDoFormPriorityLabel.setAttribute('for', 'priority')
    toDoFormPriorityLabel.textContent = "To Do Item Priority";
    toDoFormPrioritySelect.setAttribute('id', 'priority');
    priorityNow.setAttribute('value', 'urgent');
    priorityNow.setAttribute('id', 'priorityNow');
    priorityNow.textContent = "Urgent";
    priorityNow.style.backgroundColor = 'var(--urgent)';
    prioritySoon.setAttribute('value', 'soon');
    prioritySoon.setAttribute('id', 'prioritySoon');
    prioritySoon.textContent = "Soon";
    prioritySoon.style.backgroundColor = 'var(--soon)';
    priorityLater.setAttribute('value', 'later');
    priorityLater.setAttribute('id', 'priorityLater');
    priorityLater.textContent = "Later";
    priorityLater.style.backgroundColor = 'var(--later)';

    // append
    projectToDoForm.appendChild(toDoFormTitleDiv);
    toDoFormTitleDiv.appendChild(toDoFormTitleLabel);
    toDoFormTitleDiv.appendChild(toDoFormTitleInput);
    projectToDoForm.appendChild(toDoFormDescriptionDiv);
    toDoFormDescriptionDiv.appendChild(toDoFormDescriptionLabel);
    toDoFormDescriptionDiv.appendChild(toDoFormDescriptionInput);
    projectToDoForm.appendChild(toDoFormDueDateDiv);
    toDoFormDueDateDiv.appendChild(toDoFormDueDateLabel);
    toDoFormDueDateDiv.appendChild(toDoFormDueDateInput);
    projectToDoForm.appendChild(toDoFormPriorityDiv);
    toDoFormPriorityDiv.appendChild(toDoFormPriorityLabel);
    toDoFormPriorityDiv.appendChild(toDoFormPrioritySelect);
    toDoFormPrioritySelect.appendChild(priorityNow);
    toDoFormPrioritySelect.appendChild(prioritySoon);
    toDoFormPrioritySelect.appendChild(priorityLater);
    projectToDoForm.appendChild(toDoFormSaveBtn);
    projectToDoForm.appendChild(toDoFormCancelBtn);
  };

  const addProjectForm = function(e) {
    // let position = e.target.getAttribute('data-position');
    const projects = document.getElementById('projects');
    const projectForm = document.createElement('form');
    const projectFormDiv = document.createElement('div');
    const projectFormLabel = document.createElement('label');
    const projectFormInput = document.createElement('input');
    // attributes
    projectForm.setAttribute('id', 'projectForm');
    projectFormDiv.setAttribute('id', 'projectFormDiv');
    projectFormLabel.setAttribute('for', 'project');
    projectFormLabel.textContent = "Project Name";
    projectFormInput.setAttribute('type', 'text');
    projectFormInput.setAttribute('id', 'project');
    projectFormInput.setAttribute('placeholder', 'project name')
    // save button
    const projectFormSaveBtn = document.createElement('button');
    projectFormSaveBtn.setAttribute('id', 'projectFormSaveBtn');
    projectFormSaveBtn.setAttribute('type', 'submit');
    // toDoFormSaveBtn.setAttribute('data-position', `${position}`);
    projectFormSaveBtn.textContent = "save";
    projectFormSaveBtn.style.backgroundColor = "var(--later)"
    // cancel button
    const projectFormCancelBtn = document.createElement('button');
    projectFormCancelBtn.setAttribute('id', 'projectCancelBtn');
    projectFormCancelBtn.setAttribute('type', 'button');
    projectFormCancelBtn.textContent = 'cancel';
    projectFormCancelBtn.style.backgroundColor = "var(--urgent)"
    // append
    projects.innerHTML = ""; // removes projects so only form is visible
    projects.appendChild(projectForm);
    projectForm.appendChild(projectFormDiv)
    projectFormDiv.appendChild(projectFormLabel);
    projectFormDiv.appendChild(projectFormInput);
    projectForm.appendChild(projectFormSaveBtn);
    projectForm.appendChild(projectFormCancelBtn);

    projectFormSaveBtn.addEventListener('click', addProject);
    projectFormCancelBtn.addEventListener('click', addAllProjects);
  };

  return { addProjectForm, addToDoForm };
})();

export default addForms;