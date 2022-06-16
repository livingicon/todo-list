console.log("Working");

//logic for adding project, adding todo, and editing them?

const addProject = (function() {

  const addDefaultProject = function(e) {
    const addProjectBtn = document.getElementById('addProjectBtn');
    const projects = document.getElementById('projects');
    const defaultProject = document.createElement('div');

    defaultProject.setAttribute('id', 'project'); //use backticks to make id project1?
    defaultProject.textContent = "Project One";

    projects.appendChild(defaultProject);
  }

  return { addDefaultProject };

})();

const addProjectBtn = document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', addProject.addDefaultProject);



