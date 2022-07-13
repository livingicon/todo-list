import addForms from "./forms";
import loadProjects from "./projects";
import { addElements, deleteElements } from "./ui";

let myProjects = []; // doesn't matter where it is

// LOCAL STORAGE
window.onload = function() {
  myProjects = JSON.parse(localStorage.getItem('myProjects'));
  if (myProjects === null) {
    myProjects = [];
    console.log("reloaded");
  }
  loadProjects.addAllProjects(); // working
};

const addProjectBtn = document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', addForms.addProjectForm);


// TO DO
// - make sidebar title clickable
// - marking todo item as complete (mark line through)
// - add priority key (sidebar)
// - add projects header (All Projects)
// - "show all projects" button (each minimized)

// - factory function??
// - expand and minimize??
// - if project already exists alert??
// - editing todos and editing project title??