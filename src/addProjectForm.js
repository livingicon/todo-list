import {addProject, addAllProjects} from "./index.js";

const addProjectToDoForm = (function() {

  const addForm = function(e) {
    const projects = document.getElementById('projects');
    projects.innerHTML = ""; // removes projects so only form is visible
    const projectToDoForm = document.createElement('form');
    projectToDoForm.setAttribute('id', 'toDoForm');
    // project name
    const toDoFormProjectDiv = document.createElement('div');
    const toDoFormProjectLabel = document.createElement('label');
    const toDoFormProjectInput = document.createElement('input');
    toDoFormProjectDiv.setAttribute('id', 'toDoFormProjectDiv');
    toDoFormProjectLabel.setAttribute('for', 'project');
    toDoFormProjectLabel.textContent = "Project Name";
    toDoFormProjectInput.setAttribute('type', 'text');
    toDoFormProjectInput.setAttribute('id', 'project');
    toDoFormProjectInput.setAttribute('placeholder', 'project name')
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
    // todo save button
    const toDoFormSaveBtn = document.createElement('button');
    toDoFormSaveBtn.setAttribute('id', 'toDoFormSaveBtn');
    toDoFormSaveBtn.setAttribute('type', 'submit');
    toDoFormSaveBtn.textContent = "save";
    toDoFormSaveBtn.style.backgroundColor = "var(--later)"
    // todo cancel button
    const toDoFormCancelBtn = document.createElement('button');
    toDoFormCancelBtn.setAttribute('id', 'toDoFormCancelBtn');
    toDoFormCancelBtn.setAttribute('type', 'button');
    toDoFormCancelBtn.textContent = 'cancel';
    toDoFormCancelBtn.style.backgroundColor = "var(--urgent)"

    // append
    projects.appendChild(projectToDoForm);
    if (e.target.id === "addProjectBtn"){ //only adds for addProjectBtn
      projectToDoForm.appendChild(toDoFormProjectDiv);
      toDoFormProjectDiv.appendChild(toDoFormProjectLabel);
      toDoFormProjectDiv.appendChild(toDoFormProjectInput);
    }
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

    // determines what listener to add based on which form is present
    if (document.getElementById('toDoFormProjectDiv')) { // looks for projectTitle div
      toDoFormSaveBtn.addEventListener('click', addProject);
    } else {
      toDoFormSaveBtn.addEventListener('click', addToDoItem);
    }
    //may need to change faddAllProjects function for individual project view
    toDoFormCancelBtn.addEventListener('click', addAllProjects);
  };
  
  const addToDoItem = function(e){
    e.preventDefault();
    console.log("working");
  };

  return { addForm };
})();

export default addProjectToDoForm;