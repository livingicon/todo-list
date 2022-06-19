const addProject = (function() {
  const addDefaultProject = function(e) {
    const projects = document.getElementById('projects');
    const defaultProject = document.createElement('div');
    defaultProject.setAttribute('id', 'defaultProject'); //use backticks to make id project1?
    projects.appendChild(defaultProject);
    addProjectTitleInput();
  }

  function addProjectTitleInput(e) {
    const projectTitleForm = document.createElement('div');
    const projectTitleLabel = document.createElement('label');
    const projectTitleInput = document.createElement('input');
    projectTitleForm.setAttribute('id', 'projectTitleForm');
    projectTitleLabel.setAttribute('id', 'projectTitleLabel');
    projectTitleInput.addEventListener('keypress', inputProjectName);
    projectTitleLabel.setAttribute('for', 'projectTitleInput');
    projectTitleLabel.textContent = "Project Name:";
    projectTitleInput.setAttribute('id', 'projectTitleInput');
    projectTitleInput.setAttribute('type', 'text');
    projectTitleInput.setAttribute('placeholder', 'Project Name');

    if (defaultProject.firstChild === null){
      defaultProject.appendChild(projectTitleForm);
      projectTitleForm.appendChild(projectTitleLabel);
      projectTitleForm.appendChild(projectTitleInput);
    } else if (defaultProject.firstChild !== null) {
      let nonRemovedFirstWordTitle = projectTitle.innerHTML;
      projectTitleInput.removeAttribute('placeholder');
      projectTitleInput.setAttribute('value', `${removeFirstWord(nonRemovedFirstWordTitle)}`);
      defaultProject.replaceChild(projectTitleForm, projectTitle);
      projectTitleForm.appendChild(projectTitleLabel);
      projectTitleForm.appendChild(projectTitleInput);
    }
  };

  function removeFirstWord(str) {
    const indexOfSpace = str.indexOf(' ');
    if (indexOfSpace === -1) {
      return '';
    }
    return str.substring(indexOfSpace + 1);
  }

  const inputProjectName = function(e) { 
    if(e.key === "Enter") {
      const projectTitle = document.createElement('h3');
      projectTitleLabel.remove();
      projectTitle.setAttribute('id', 'projectTitle');
      projectTitle.innerHTML = `Project: ${e.target.value}`;
      defaultProject.replaceChild(projectTitle, projectTitleForm);
      projectTitle.addEventListener('dblclick', addProjectTitleInput);
      addToDoBtn();
    }
  };

  const addToDoBtn = function() {
    if(document.getElementById('addToDoBtn') === null) {
      const addToDoBtn = document.createElement('button');
      addToDoBtn.addEventListener('click', addToDoItem);
      addToDoBtn.setAttribute('id', 'addToDoBtn');
      addToDoBtn.textContent = "+ add to-do item";
      defaultProject.appendChild(addToDoBtn);
    }
  };

  const addToDoItem = function() {
    const addToDoBtn = document.getElementById('addToDoBtn');
    const toDoForm = document.createElement('form');
    toDoForm.setAttribute('id', 'toDoForm');

    const toDoFormTitleDiv = document.createElement('div');
    const toDoFormTitleLabel = document.createElement('label');
    const toDoFormTitleInput = document.createElement('input');
    toDoFormTitleLabel.setAttribute('for', 'title');
    toDoFormTitleLabel.textContent = "Title";
    toDoFormTitleInput.setAttribute('type', 'text');
    toDoFormTitleInput.setAttribute('id', 'title');
    toDoFormTitleInput.setAttribute('placeholder', 'title')

    const toDoFormDescriptionDiv = document.createElement('div');
    const toDoFormDescriptionLabel = document.createElement('label');
    const toDoFormDescriptionInput = document.createElement('input');
    toDoFormDescriptionLabel.setAttribute('for', 'descripton');
    toDoFormDescriptionLabel.textContent = "Description";
    toDoFormDescriptionInput.setAttribute('type', 'text');
    toDoFormDescriptionInput.setAttribute('id', 'descripton');
    toDoFormDescriptionInput.setAttribute('placeholder', 'description')

    const toDoFormDueDateDiv = document.createElement('div');
    const toDoFormDueDateLabel = document.createElement('label');
    const toDoFormDueDateInput = document.createElement('input');
    toDoFormDueDateLabel.setAttribute('for', 'due-date');
    toDoFormDueDateLabel.textContent = "Due Date";
    toDoFormDueDateInput.setAttribute('type', 'date');
    toDoFormDueDateInput.setAttribute('id', 'due-date');

    const toDoFormPriorityDiv = document.createElement('div');
    const toDoFormPriorityLabel = document.createElement('label');
    const toDoFormPrioritySelect = document.createElement('select');
    const priorityNow = document.createElement('option');
    const prioritySoon = document.createElement('option');
    const priorityLater = document.createElement('option');
    toDoFormPriorityLabel.setAttribute('for', 'priority')
    toDoFormPriorityLabel.textContent = "Priority";
    toDoFormPrioritySelect.setAttribute('id', 'priority');
    priorityNow.setAttribute('value', 'urgent');
    priorityNow.setAttribute('id', 'priorityNow');
    priorityNow.textContent = "Urgent";
    priorityNow.style.backgroundColor = 'red';
    prioritySoon.setAttribute('value', 'soon');
    prioritySoon.setAttribute('id', 'prioritySoon');
    prioritySoon.textContent = "Soon";
    prioritySoon.style.backgroundColor = 'yellow';
    priorityLater.setAttribute('value', 'later');
    priorityLater.setAttribute('id', 'priorityLater');
    priorityLater.textContent = "Later";
    priorityLater.style.backgroundColor = 'green';

    const toDoFormSaveBtn = document.createElement('button');
    toDoFormSaveBtn.setAttribute('id', 'toDoSaveBtn');
    toDoFormSaveBtn.setAttribute('type', 'submit');
    toDoFormSaveBtn.textContent = "save";
    
    addToDoBtn.remove();
    defaultProject.appendChild(toDoForm);
    toDoForm.appendChild(toDoFormTitleDiv);
    toDoFormTitleDiv.appendChild(toDoFormTitleLabel);
    toDoFormTitleDiv.appendChild(toDoFormTitleInput);
    toDoForm.appendChild(toDoFormDescriptionDiv);
    toDoFormDescriptionDiv.appendChild(toDoFormDescriptionLabel);
    toDoFormDescriptionDiv.appendChild(toDoFormDescriptionInput);
    toDoForm.appendChild(toDoFormDueDateDiv);
    toDoFormDueDateDiv.appendChild(toDoFormDueDateLabel);
    toDoFormDueDateDiv.appendChild(toDoFormDueDateInput);
    toDoForm.appendChild(toDoFormPriorityDiv);
    toDoFormPriorityDiv.appendChild(toDoFormPriorityLabel);
    toDoFormPriorityDiv.appendChild(toDoFormPrioritySelect);
    toDoFormPrioritySelect.appendChild(priorityNow);
    toDoFormPrioritySelect.appendChild(prioritySoon);
    toDoFormPrioritySelect.appendChild(priorityLater);
    defaultProject.appendChild(toDoFormSaveBtn);
  };

  return { addDefaultProject };
})();

const addProjectBtn = document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', addProject.addDefaultProject);

// need to separate out the change from h3 to input into different modules
// when project name added it needs to go to sidebar