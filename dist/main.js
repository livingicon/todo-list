(() => {
  "use strict";
  const t = (function () {
      let t = [];
      const e = function () {
          (t = JSON.parse(localStorage.getItem("myProjects"))),
            null === t && (t = []);
          const e = document.getElementById("projects"),
            r = document.getElementById("projectList");
          (e.innerHTML = ""), (r.innerHTML = "");
          const n = document.createElement("button");
          (n.innerHTML = "Show All Projects"),
            n.setAttribute("id", "showAllProjectsBtn"),
            (n.style.display = "none"),
            l(),
            t.forEach((t) => o(t)),
            e.append(n);
        },
        o = function (e) {
          const o = document.getElementById("projects"),
            n = document.createElement("div"),
            l = document.createElement("div"),
            s = document.createElement("h2"),
            c = document.createElement("div"),
            p = document.createElement("img"),
            m = document.createElement("img"),
            g = document.createElement("h4"),
            b = document.createElement("button");
          n.setAttribute("class", "card"),
            n.setAttribute("id", `${t.indexOf(e)}`),
            l.setAttribute("id", "titleDiv"),
            s.setAttribute("id", "projectTitle"),
            (s.textContent = `Project: ${e.project}`),
            c.setAttribute("id", "projectTitleIcons"),
            p.setAttribute("id", "minimize"),
            p.setAttribute("src", "./images/window-minimize.png"),
            p.setAttribute("alt", "minimize todo list"),
            p.setAttribute("title", "hide or show todo list"),
            p.setAttribute("data-position", `${t.indexOf(e)}`),
            m.setAttribute("id", "deletePrj"),
            m.setAttribute("src", "./images/delete-alert.png"),
            m.setAttribute("alt", "delete project icon"),
            m.setAttribute("title", "delete project"),
            m.setAttribute("data-position", `${t.indexOf(e)}`),
            g.setAttribute("id", "toDoListHeader"),
            (g.textContent = `${e.project} task list:`),
            b.setAttribute("id", "addToDoBtn"),
            b.setAttribute("type", "submit"),
            b.setAttribute("data-position", `${t.indexOf(e)}`),
            (b.textContent = "add task"),
            o.append(n),
            n.append(l),
            l.append(s),
            l.append(c),
            c.append(p),
            c.append(m),
            n.append(g);
          let y = `${t.indexOf(e)}`;
          t[`${t.indexOf(e)}`].toDoArray.forEach((t) => d(t, y)),
            n.append(b),
            s.addEventListener("click", u),
            m.addEventListener("dblclick", r.deleteProject),
            b.addEventListener("click", a.addToDoForm),
            p.addEventListener("click", i.toggle);
        },
        d = function (e, o) {
          const i = document.getElementById(o),
            d = document.createElement("h6"),
            l = document.createElement("div"),
            s = document.createElement("img"),
            c = document.createElement("img"),
            u = document.createElement("img");
          d.setAttribute("id", "toDoItem"),
            (d.innerHTML = `&nbsp;&nbsp;${e.title}: ${e.description}<br />\n    &nbsp;&nbsp;Goal Completion: ${e.date}`),
            (d.style.border = "2px solid var(--todo-light)"),
            l.setAttribute("id", "toDoIcons"),
            s.setAttribute("id", "completedToDo"),
            s.setAttribute("src", "./images/check-bold.png"),
            s.setAttribute("alt", "mark as completed icon"),
            s.setAttribute("title", "mark complete or incomplete");
          let p = `${t[o].toDoArray.indexOf(e)}`;
          s.setAttribute("data-position", `${o}`),
            s.setAttribute("data-todo", `${p}`),
            c.setAttribute("id", "editToDo"),
            c.setAttribute("src", "./images/pencil.png"),
            c.setAttribute("alt", "edit project icon"),
            c.setAttribute("title", "edit todo item"),
            c.setAttribute("data-position", `${o}`),
            c.setAttribute("data-todo", `${p}`),
            u.setAttribute("id", "deleteToDo"),
            u.setAttribute("src", "./images/delete-alert.png"),
            u.setAttribute("alt", "delete project icon"),
            u.setAttribute("title", "delete todo item"),
            u.setAttribute("data-position", `${o}`),
            u.setAttribute("data-todo", `${p}`),
            i.appendChild(d),
            d.append(l),
            l.append(u),
            l.append(c),
            l.append(s),
            "urgent" === e.priority
              ? (d.style.backgroundColor = "var(--urgent)")
              : "soon" === e.priority
              ? (d.style.backgroundColor = "var(--soon)")
              : "later" === e.priority
              ? (d.style.backgroundColor = "var(--later)")
              : ((d.style.backgroundColor = "var(--project-light)"),
                d.style.setProperty("text-decoration", "line-through"),
                s.remove()),
            s.addEventListener("click", n.toDoCompleted),
            c.addEventListener("click", a.addToDoForm),
            u.addEventListener("dblclick", r.deleteToDo);
        },
        l = function () {
          (projectList.innerHTML = ""), t.forEach((t) => s(t));
        },
        s = function (t) {
          const e = document.getElementById("projectList"),
            o = document.createElement("h6");
          (o.textContent = `${t.project}`),
            o.setAttribute("class", "projectTitleSidebar"),
            o.setAttribute("id", `${t.project}`),
            e.append(o),
            o.addEventListener("click", c);
        },
        c = function (o) {
          for (let e = 0; e < t.length; e++)
            t[e].project === o.target.id
              ? (document.getElementById(`${e}`).style.display = "block")
              : (document.getElementById(`${e}`).style.display = "none");
          const r = document.getElementById("showAllProjectsBtn");
          (r.style.display = "block"), r.addEventListener("click", e);
        },
        u = function (o) {
          const r = o.target.innerHTML;
          e();
          for (let e = 0; e < t.length; e++)
            t[e].project === p(r)
              ? (document.getElementById(`${e}`).style.display = "block")
              : (document.getElementById(`${e}`).style.display = "none");
          const n = document.getElementById("showAllProjectsBtn");
          (n.style.display = "block"), n.addEventListener("click", e);
        };
      function p(t) {
        const e = t.indexOf(" ");
        return -1 === e ? "" : t.substring(e + 1);
      }
      return {
        addAllProjects: e,
        projectsSidebar: l,
        focusEdits: function (o) {
          e();
          for (let e = 0; e < t.length; e++)
            t[e].project === t[o.target.getAttribute("data-position")].project
              ? (document.getElementById(`${e}`).style.display = "block")
              : (document.getElementById(`${e}`).style.display = "none");
          const r = document.getElementById("showAllProjectsBtn");
          (r.style.display = "block"), r.addEventListener("click", e);
        },
      };
    })(),
    e = t,
    o = (function () {
      function t(t) {
        (this.project = t), (this.toDoArray = []);
      }
      class o {
        constructor(t = "unknown", e = "unknown", o = 0, r = 0) {
          (this.title = t),
            (this.description = e),
            (this.date = o),
            (this.priority = r);
        }
      }
      return {
        addProject: function (o) {
          let r = [];
          (r = JSON.parse(localStorage.getItem("myProjects"))),
            null === r && (r = []),
            o.preventDefault();
          const n = document.getElementById("project").value;
          if (!n) return alert("Please enter a project name in the input."), !1;
          {
            let o = new t(n);
            r.unshift(o),
              localStorage.setItem("myProjects", JSON.stringify(r)),
              e.addAllProjects();
          }
        },
        addToDo: function (t) {
          let r = [];
          (r = JSON.parse(localStorage.getItem("myProjects"))),
            t.preventDefault();
          const n = document.getElementById("title").value,
            i = document.getElementById("description").value,
            d = document.getElementById("due-date").value,
            a = document.getElementById("priority").value;
          if (!(n && i && d))
            return alert("All fields are required to add todo item."), !1;
          {
            let l = new o(n, i, d, a);
            null === t.target.getAttribute("data-todo")
              ? r[`${t.target.getAttribute("data-position")}`].toDoArray.push(l)
              : r[t.target.getAttribute("data-position")].toDoArray.splice(
                  t.target.getAttribute("data-todo"),
                  1,
                  l
                ),
              localStorage.setItem("myProjects", JSON.stringify(r)),
              "" === t.target.getAttribute("data-display")
                ? e.addAllProjects()
                : e.focusEdits(t);
          }
        },
      };
    })(),
    r = {
      deleteProject: function (t) {
        let o = [];
        (o = JSON.parse(localStorage.getItem("myProjects"))),
          o.splice(t.target.getAttribute("data-position"), 1),
          localStorage.setItem("myProjects", JSON.stringify(o)),
          e.addAllProjects();
      },
      deleteToDo: function (t) {
        let o = [];
        (o = JSON.parse(localStorage.getItem("myProjects"))),
          o[t.target.getAttribute("data-position")].toDoArray.splice(
            t.target.getAttribute("data-todo"),
            1
          ),
          localStorage.setItem("myProjects", JSON.stringify(o)),
          "" ===
          document.getElementById(t.target.getAttribute("data-position")).style
            .display
            ? e.addAllProjects()
            : e.focusEdits(t);
      },
    },
    n = {
      toDoCompleted: function (t) {
        let o = [];
        (o = JSON.parse(localStorage.getItem("myProjects"))),
          (o[t.target.getAttribute("data-position")].toDoArray[
            t.target.getAttribute("data-todo")
          ].priority = "completed"),
          localStorage.setItem("myProjects", JSON.stringify(o));
        const r = document.getElementById(
          t.target.getAttribute("data-position")
        ).style.display;
        console.log(r), "" === r ? e.addAllProjects() : e.focusEdits(t);
      },
    },
    i = {
      toggle: function (t) {
        const e = document.getElementById(
          t.target.getAttribute("data-position")
        );
        "" === e.getElementsByTagName("h4")[0].style.display ||
        "block" === e.getElementsByTagName("h4")[0].style.display
          ? (function (t) {
              let e = [];
              e = JSON.parse(localStorage.getItem("myProjects"));
              const o = document.getElementById(
                t.target.getAttribute("data-position")
              );
              o.getElementsByTagName("h4")[0].style.display = "none";
              for (
                let r = 0;
                r < e[t.target.getAttribute("data-position")].toDoArray.length;
                r++
              )
                o.getElementsByTagName("h6")[r].style.display = "none";
            })(t)
          : (function (t) {
              let e = [];
              e = JSON.parse(localStorage.getItem("myProjects"));
              const o = document.getElementById(
                t.target.getAttribute("data-position")
              );
              o.getElementsByTagName("h4")[0].style.display = "block";
              for (
                let r = 0;
                r < e[t.target.getAttribute("data-position")].toDoArray.length;
                r++
              )
                o.getElementsByTagName("h6")[r].style.display = "block";
            })(t);
      },
    },
    d = (function () {
      const t = function (t) {
        let o = [];
        (o = JSON.parse(localStorage.getItem("myProjects"))),
          e.addAllProjects();
        for (let e = 0; e < o.length; e++)
          o[e] === o[t.target.getAttribute("data-position")]
            ? (document.getElementById(`${e}`).style.display = "block")
            : (document.getElementById(`${e}`).style.display = "none");
        const r = document.getElementById("showAllProjectsBtn");
        (r.style.display = "block"),
          r.addEventListener("click", e.addAllProjects);
      };
      return {
        addProjectForm: function (t) {
          const r = document.getElementById("projects"),
            n = document.createElement("form"),
            i = document.createElement("div"),
            d = document.createElement("label"),
            a = document.createElement("input"),
            l = document.createElement("button"),
            s = document.createElement("button");
          n.setAttribute("id", "projectForm"),
            i.setAttribute("id", "projectFormDiv"),
            d.setAttribute("for", "project"),
            (d.textContent = "Project Name"),
            a.setAttribute("type", "text"),
            a.setAttribute("id", "project"),
            a.setAttribute("placeholder", "project name"),
            l.setAttribute("id", "projectFormSaveBtn"),
            l.setAttribute("type", "submit"),
            (l.textContent = "save"),
            (l.style.backgroundColor = "var(--later)"),
            s.setAttribute("id", "projectCancelBtn"),
            s.setAttribute("type", "button"),
            (s.textContent = "cancel"),
            (s.style.backgroundColor = "var(--urgent)"),
            (r.innerHTML = ""),
            r.appendChild(n),
            n.appendChild(i),
            i.appendChild(d),
            i.appendChild(a),
            n.appendChild(l),
            n.appendChild(s),
            l.addEventListener("click", o.addProject),
            s.addEventListener("click", e.addAllProjects);
        },
        addToDoForm: function (r) {
          let n = [];
          n = JSON.parse(localStorage.getItem("myProjects"));
          const i = document.getElementById("projects"),
            d = document.createElement("form"),
            a = document.createElement("div");
          d.setAttribute("id", "toDoForm");
          const l = document.createElement("div"),
            s = document.createElement("label"),
            c = document.createElement("input");
          s.setAttribute("for", "title"),
            (s.textContent = "To Do Item Title"),
            c.setAttribute("type", "text"),
            c.setAttribute("id", "title"),
            "editToDo" === r.target.id
              ? c.setAttribute(
                  "value",
                  `${
                    n[r.target.getAttribute("data-position")].toDoArray[
                      r.target.getAttribute("data-todo")
                    ].title
                  }`
                )
              : c.setAttribute("placeholder", "title");
          const u = document.createElement("div"),
            p = document.createElement("label"),
            m = document.createElement("input");
          p.setAttribute("for", "descripton"),
            (p.textContent = "To Do Item Description"),
            m.setAttribute("type", "text"),
            m.setAttribute("id", "description"),
            "editToDo" === r.target.id
              ? m.setAttribute(
                  "value",
                  `${
                    n[r.target.getAttribute("data-position")].toDoArray[
                      r.target.getAttribute("data-todo")
                    ].description
                  }`
                )
              : m.setAttribute("placeholder", "description");
          const g = document.createElement("div"),
            b = document.createElement("label"),
            y = document.createElement("input");
          if (
            (b.setAttribute("for", "due-date"),
            (b.textContent = "To Do Item Due Date"),
            y.setAttribute("type", "date"),
            y.setAttribute("id", "due-date"),
            "editToDo" === r.target.id)
          )
            y.setAttribute(
              "value",
              `${
                n[r.target.getAttribute("data-position")].toDoArray[
                  r.target.getAttribute("data-todo")
                ].date
              }`
            );
          else {
            let t = new Date().toISOString().slice(0, 10);
            y.setAttribute("value", `${t}`);
          }
          const A = document.createElement("div"),
            E = document.createElement("label"),
            j = document.createElement("select"),
            h = document.createElement("option"),
            f = document.createElement("option"),
            v = document.createElement("option"),
            C = document.createElement("option");
          E.setAttribute("for", "priority"),
            (E.textContent = "To Do Item Priority"),
            j.setAttribute("id", "priority"),
            h.setAttribute("value", "urgent"),
            h.setAttribute("id", "priorityNow"),
            (h.textContent = "Urgent"),
            (h.style.backgroundColor = "var(--urgent)"),
            f.setAttribute("value", "soon"),
            f.setAttribute("id", "prioritySoon"),
            (f.textContent = "Soon"),
            (f.style.backgroundColor = "var(--soon)"),
            v.setAttribute("value", "later"),
            v.setAttribute("id", "priorityLater"),
            (v.textContent = "Later"),
            (v.style.backgroundColor = "var(--later)"),
            C.setAttribute("value", "completed"),
            C.setAttribute("id", "priorityCompleted"),
            (C.textContent = "Completed"),
            (C.style.backgroundColor = "var(--project-light)"),
            "editToDo" === r.target.id &&
            "urgent" ===
              n[r.target.getAttribute("data-position")].toDoArray[
                r.target.getAttribute("data-todo")
              ].priority
              ? h.setAttribute("selected", "selected")
              : "editToDo" === r.target.id &&
                "soon" ===
                  n[r.target.getAttribute("data-position")].toDoArray[
                    r.target.getAttribute("data-todo")
                  ].priority
              ? f.setAttribute("selected", "selected")
              : "editToDo" === r.target.id &&
                "later" ===
                  n[r.target.getAttribute("data-position")].toDoArray[
                    r.target.getAttribute("data-todo")
                  ].priority
              ? v.setAttribute("selected", "selected")
              : "editToDo" === r.target.id &&
                "completed" ===
                  n[r.target.getAttribute("data-position")].toDoArray[
                    r.target.getAttribute("data-todo")
                  ].priority
              ? C.setAttribute("selected", "selected")
              : h.setAttribute("selected", "selected");
          const I = document.createElement("button");
          I.setAttribute("id", "toDoFormSaveBtn"),
            I.setAttribute("type", "submit"),
            (I.textContent = "save"),
            (I.style.backgroundColor = "var(--later)");
          const D = document.getElementById(
            r.target.getAttribute("data-position")
          ).style.display;
          I.setAttribute("data-display", `${D}`);
          let k = r.target.getAttribute("data-position");
          I.setAttribute("data-position", `${k}`),
            "editToDo" === r.target.id &&
              I.setAttribute(
                "data-todo",
                `${r.target.getAttribute("data-todo")}`
              );
          const B = document.createElement("button");
          B.setAttribute("id", "toDoCancelBtn"),
            B.setAttribute("type", "button"),
            (B.textContent = "cancel"),
            (B.style.backgroundColor = "var(--urgent)"),
            B.setAttribute("data-position", `${k}`),
            (i.innerHTML = ""),
            i.appendChild(d),
            d.appendChild(a),
            a.appendChild(l),
            l.appendChild(s),
            l.appendChild(c),
            a.appendChild(u),
            u.appendChild(p),
            u.appendChild(m),
            a.appendChild(g),
            g.appendChild(b),
            g.appendChild(y),
            a.appendChild(A),
            A.appendChild(E),
            A.appendChild(j),
            j.appendChild(h),
            j.appendChild(f),
            j.appendChild(v),
            j.appendChild(C),
            a.appendChild(I),
            a.appendChild(B),
            "" === D
              ? B.addEventListener("click", e.addAllProjects)
              : B.addEventListener("click", t),
            I.addEventListener("click", o.addToDo);
        },
      };
    })(),
    a = d;
  let l = [];
  window.onload = function () {
    (l = JSON.parse(localStorage.getItem("myProjects"))),
      null === l && (l = []),
      e.addAllProjects();
  };
  const s = document.getElementById("addProjectBtn"),
    c = document.getElementById("prjListSidebarTitle");
  s.addEventListener("click", a.addProjectForm),
    c.addEventListener("click", e.addAllProjects);
})();
