//logic for adding project, adding todo, and editing them?

const addProject = (function() {
  //should I put all of the const up here for all below functions?
  
  const addDefaultProject = function(e) {
    const projects = document.getElementById('projects');
    const defaultProject = document.createElement('div');
    defaultProject.setAttribute('id', 'defaultProject'); //use backticks to make id project1?
    projects.appendChild(defaultProject);
    addProjectTitleInput();
  }

  function addProjectTitleInput() {
    const projectTitleInput = document.createElement('input');
    projectTitleInput.addEventListener('keypress', inputProjectName);
    projectTitleInput.setAttribute('id', 'projectTitleInput')
    projectTitleInput.setAttribute('type', 'text');
    projectTitleInput.setAttribute('placeholder', 'Project Name');
    //cut if statement out to own function?
    if (defaultProject.firstChild === null){
      defaultProject.appendChild(projectTitleInput);
    } else if (defaultProject.firstChild !== null) {
      projectTitleInput.removeAttribute('placeholder');
      projectTitleInput.setAttribute('value', `${projectTitle.innerHTML}`);
      defaultProject.replaceChild(projectTitleInput, projectTitle);
    }
  };

  const inputProjectName = function(e) { 
    if(e.key === "Enter") {
      const projectTitle = document.createElement('h3');
      projectTitle.setAttribute('id', 'projectTitle');
      projectTitle.innerHTML = `${e.target.value}`;
      defaultProject.replaceChild(projectTitle, projectTitleInput);
      projectTitle.addEventListener('dblclick', addProjectTitleInput);
      addToDoBtn();
    }
  };

  const addToDoBtn = function() {
    if(document.getElementById('addToDoBtn') === null) {
      const addToDoBtn = document.createElement('button');
      addToDoBtn.addEventListener('click', addToDoItem);
      addToDoBtn.setAttribute('id', 'addToDoBtn');
      addToDoBtn.textContent = "+ add project to-do list item";
      defaultProject.appendChild(addToDoBtn);
    }
  };

  const addToDoItem = function() {
    const toDoItem = document.createElement('input');
    //expand
    console.log("add a todo item");
  };







  return { addDefaultProject };
})();

const addProjectBtn = document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', addProject.addDefaultProject);

// need to separate out the change from h3 to input into different modules
// when project name added it needs to go to sidebar