// logic for loading page, including default empty project 
// when you load, but only if there aren't any stored in localStorage

//1. onload, load previously saved projects
// note: this is where the myProjects array is created
// window.onload = function() {
//   myProjects = JSON.parse(localStorage.getItem('myProjects'));
//   if (myProjects === null) {
//     myProjects = [];
//   }
//   addProject();
// };
