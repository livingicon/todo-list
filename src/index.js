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
// const showAllProjectsBtn = document.getElementById('showAllProjectsBtn');

addProjectBtn.addEventListener('click', addForms.addProjectForm);
// showAllProjectsBtn.addEventListener('dblclick', loadProjects.addAllProjects);

// TO DO
//  1. minimize maximize
//  2. clickable sidebar that display only one project (still minimize/maximize)
//  3. when one visible, the show all button also become visible (reload basically)
//  4. when you click another, it switches them out
// REVISIONS LATER
// - factory function??
// - if project already exists alert??
// - sorting for ugency, date, alphabet?