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
  loadProjects.addAllProjects();
};

const addProjectBtn = document.getElementById('addProjectBtn');
const prjListSidebarTitle = document.getElementById('prjListSidebarTitle');

addProjectBtn.addEventListener('click', addForms.addProjectForm);
prjListSidebarTitle.addEventListener('dblclick', loadProjects.addAllProjects)



// TO DO
//  1. when one visible, the show all button also become visible (reload basically)
//  2. edit and delete when only one selected keep only that one selected
//  2. sidebar hover change color

// REVISIONS LATER
// - factory function??
// - if project already exists alert??
// - sorting for ugency, date, alphabet?