import addForms from "./forms";
import loadProjects from "./projects";

let myProjects = [];

// LOCAL STORAGE
window.onload = function () {
  myProjects = JSON.parse(localStorage.getItem("myProjects"));
  if (myProjects === null) {
    myProjects = [];
  }
  loadProjects.addAllProjects();
};

const addProjectBtn = document.getElementById("addProjectBtn");
const prjListSidebarTitle = document.getElementById("prjListSidebarTitle");

addProjectBtn.addEventListener("click", addForms.addProjectForm);
prjListSidebarTitle.addEventListener("click", loadProjects.addAllProjects);

// REVISIONS LATER
// - factory function??
// - if project already exists alert??
// - sorting for ugency, date, alphabet?
