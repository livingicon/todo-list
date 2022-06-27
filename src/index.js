// local storage that loads existing projects if they exist and establishes the storage array
// window.onload = function() {
//   myProjects = JSON.parse(localStorage.getItem('myProjects'));
//   if (myProjects === null) {
//     myProjects = []; //where projects are stored
//     console.log(myProjects);
//   }
//   // addProjects(); //not written yet
// };

let myProjects = [];

// CREATE PROJECT TODO FORM
const addProjectToDoForm = (function() {

  const addForm = function() {
    const projects = document.getElementById('projects');
    const projectToDoForm = document.createElement('form');
    projectToDoForm.setAttribute('id', 'toDoForm');
    // project name
    const toDoFormProjectDiv = document.createElement('div');
    const toDoFormProjectLabel = document.createElement('label');
    const toDoFormProjectInput = document.createElement('input');
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
    priorityNow.style.backgroundColor = 'red';
    prioritySoon.setAttribute('value', 'soon');
    prioritySoon.setAttribute('id', 'prioritySoon');
    prioritySoon.textContent = "Soon";
    prioritySoon.style.backgroundColor = 'yellow';
    priorityLater.setAttribute('value', 'later');
    priorityLater.setAttribute('id', 'priorityLater');
    priorityLater.textContent = "Later";
    priorityLater.style.backgroundColor = 'green';
    // todo save button
    const toDoFormSaveBtn = document.createElement('button');
    toDoFormSaveBtn.setAttribute('id', 'toDoFormSaveBtn');
    toDoFormSaveBtn.setAttribute('type', 'submit');
    toDoFormSaveBtn.textContent = "save";
    // append
    projects.appendChild(projectToDoForm);
    projectToDoForm.appendChild(toDoFormProjectDiv);
    toDoFormProjectDiv.appendChild(toDoFormProjectLabel);
    toDoFormProjectDiv.appendChild(toDoFormProjectInput);
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
    
    toDoFormSaveBtn.addEventListener('click', addProject);
   };

  return { addForm };
})();

function Project(project, title, description, date, priority) {
  this.project = project;
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
};

const addProject = function(e){
  e.preventDefault()
  const project = document.getElementById('project').value;
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('due-date').value;
  const priority = document.getElementById('priority').value;
  if (!project || !title || !description || !date) {
    alert("All fields are required to add a project and project todo list item.");
    return false;
  } else {
    let newProject = new Project(project, title, description, date, priority);
    myProjects.push(newProject);
    addAllProjects(newProject); 
  }
};

const addAllProjects = function(newProject){
  const projects = document.getElementById('projects');
  projects.innerHTML = "";
  myProjects.forEach(element => generateProjectCards(element));
};

const generateProjectCards = function(stuff) {
  const projects = document.getElementById('projects');
  const card = document.createElement('div');
  const cardProject = document.createElement('div');
  const cardToDoList = document.createElement('div');
  const projectTitle = document.createElement('h2');
  const toDoListHeader = document.createElement('h4')
  const toDoItem = document.createElement('h6');

  cardToDoList.setAttribute('id', 'cardToDoList')
  cardToDoList.style.backgroundColor = 'green'; //make color dynamically change
  projectTitle.textContent = `Project: ${stuff.project}`;
  toDoListHeader.textContent = `${stuff.project} To Do List`;
  toDoItem.innerHTML = `${stuff.title}: ${stuff.description}<br />
  Goal Completion: ${stuff.date}`;

  projects.append(card);
  card.append(cardProject);
  cardProject.append(projectTitle);
  card.append(cardToDoList);
  cardToDoList.append(toDoListHeader);
  cardToDoList.append(toDoItem);
};


// FACTORY FUNCTION
// const projectToDoFactory = 
// (project, toDoTitle, toDoDescription, toDoDueDate, toDoPriority) => {
//   const addProject = () => console.log('Josh');
//   return { project, toDoTitle, toDoDescription, toDoDueDate, toDoPriority, 
//     addProject };
// };

// //examples of using above factory function
// const garageProject = projectToDoFactory('garage', 'organize tool chest', 'the tool chest needs organized', 27, 'soon');
// console.log(garageProject.toDoDescription);
// garageProject.addProject();

const addProjectBtn = document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', addProjectToDoForm.addForm);

// // adds project name input
//   const addDefaultProject = function(e) {
//     const projects = document.getElementById('projects');
//     const defaultProject = document.createElement('div');
//     defaultProject.setAttribute('id', 'defaultProject'); //use backticks to make id project1?
//     projects.appendChild(defaultProject);
//     addProjectTitleInput();
//   }