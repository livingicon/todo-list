//logic for adding project, adding todo, and editing them?

const addProject = (function() {

  const addDefaultProject = function(e) {
    const projects = document.getElementById('projects');
    const defaultProject = document.createElement('div');
    const projectTitle = document.createElement('input');
    const addToDoBtn = document.createElement('button');

    projectTitle.addEventListener('click', editProjectName);
    addToDoBtn.addEventListener('click', test2);

    defaultProject.setAttribute('id', 'project'); //use backticks to make id project1?
    projectTitle.setAttribute('id', 'projectTitle')
    projectTitle.setAttribute('type', 'text');
    projectTitle.setAttribute('placeholder', 'Project Name')
    addToDoBtn.setAttribute('id', 'addToDoBtn');
    addToDoBtn.textContent = "+ add to-do list item";

    projects.appendChild(defaultProject);
    defaultProject.appendChild(projectTitle);
    defaultProject.appendChild(addToDoBtn);
  }

  const editProjectName = function(e) { 
    console.log("click");
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


{/* <input type="text" id="myText" value="Some text..."></input> */}