//logic for adding project, adding todo, and editing them?

const addProject = (function() {

  const addDefaultProject = function(e) {
    const projects = document.getElementById('projects');
    const defaultProject = document.createElement('div');
    const projectTitle = document.createElement('h3');
    const addToDoBtn = document.createElement('button');

    projectTitle.addEventListener('dblclick', test);
    addToDoBtn.addEventListener('click', test2);

    defaultProject.setAttribute('id', 'project'); //use backticks to make id project1?
    projectTitle.setAttribute('id', 'projectTitle')
    projectTitle.textContent = "Project Name";
    addToDoBtn.setAttribute('id', 'addToDoBtn');
    addToDoBtn.textContent = "+ add to-do list item";

    projects.appendChild(defaultProject);
    defaultProject.appendChild(projectTitle);
    defaultProject.appendChild(addToDoBtn);
  }

  const test = function() {
    console.log("double click");
  };

  const test2 = function() {
    console.log("add a todo item");
  };

  return { addDefaultProject };

})();

const addProjectBtn = document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', addProject.addDefaultProject);



