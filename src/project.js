//factory function module (creating project)
//then import into website.js for default load


//1. onload, access local storage
// window.onload = function() {
//   myProjects = JSON.parse(localStorage.getItem('myProjects'));
//   if (myProjects === null) {
//     myProjects = [];
//   }
//   addProject();
// };

//2. constructor (try to change to factory later?)
function Project(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

//it should be on the edit option when it loads.




 