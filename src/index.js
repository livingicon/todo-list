import addForms from "./forms";
import loadProjects from "./projects";
import { addElements, deleteElements, editElements } from "./ui";

let myProjects = [];

// LOCAL STORAGE
window.onload = function() {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
  if (myProjects === null) {
    myProjects = [];
  }
  loadProjects.projectsSidebar();
  // loadProjects.addAllProjects();
  // change above to load projects (without todo)
};

const addProjectBtn = document.getElementById('addProjectBtn');
const showAllProjectsBtn = document.getElementById('showAllProjectsBtn');

addProjectBtn.addEventListener('click', addForms.addProjectForm);
showAllProjectsBtn.addEventListener('dblclick', loadProjects.addAllProjects);


// TO DO (Today?)
// 3. show all projects button (minimized by default)
// - start with noprojects visible (only clickable sidebar)
// - when you click one it becomes visible, then expandable
// - when you click another, it switches them out
// - if you click show all, it lists as projects, but then shows sort options

// - make sidebar title clickable
// - add priority key (sidebar)

// - factory function??
// - expand and minimize??
// - if project already exists alert??
// - editing todos and editing project title??