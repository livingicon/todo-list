//logic for adding project, adding todo, and editing them?

const addProject = (function() {

  const addDefaultProject = function(e) {
    const projects = document.getElementById('projects');
    const defaultProject = document.createElement('div');
    const projectTitleInput = document.createElement('input');
    const addToDoBtn = document.createElement('button');

    projectTitleInput.addEventListener('keypress', editProjectName);
    addToDoBtn.addEventListener('click', test2);

    defaultProject.setAttribute('id', 'defaultProject'); //use backticks to make id project1?
    projectTitleInput.setAttribute('id', 'projectTitleInput')
    projectTitleInput.setAttribute('type', 'text');
    projectTitleInput.setAttribute('placeholder', 'Project Name')
    addToDoBtn.setAttribute('id', 'addToDoBtn');
    addToDoBtn.textContent = "+ add project to-do list item";

    projects.appendChild(defaultProject);
    defaultProject.appendChild(projectTitleInput);
    defaultProject.appendChild(addToDoBtn);
  }

  const editProjectName = function(e) { 
    if(e.key === "Enter") {
      const projectTitle = document.createElement('h3');
      projectTitle.setAttribute('id', 'projectTitle');
      projectTitle.innerHTML = `${e.target.value}`;
      // projectTitleInput.remove();
      defaultProject.replaceChild(projectTitle, projectTitleInput);
    }
  };

  const test2 = function() {
    const toDoItem = document.createElement('input');
    //open modal
    console.log("add a todo item");
  };

  return { addDefaultProject };

})();

const addProjectBtn = document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', addProject.addDefaultProject);

// need to separate out the change from h3 to input into different modules