import { useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  // Navigate,
} from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import Statepage from "./pages/home/StatePage";

import Notfoundpage from "./pages/404/NotFoundPage";
import Aboutpage from "./pages/about-faqs/AboutPage";
import Profilepage from "./pages/profile/ProfilePage";
import Taskspage from "./pages/tasks/TasksPage";
import Taskdetailpage from "./pages/tasks/TaskDetailPage";
import Loginpage from "./pages/auth/LoginPage";

function AppRoutingOne() {
  const logged = false;

  let taskList = [
    {
      id: 1,
      name: "Task 1",
      description: "My fist Task",
    },
    {
      id: 2,
      name: "Task 2",
      description: "My second Task",
    },
    {
      id: 3,
      name: "Task 3",
      description: "My third Task",
    },
  ];

  useEffect(() => {
    const logged = localStorage.getItem("credentials");
    console.log("User Logged?", logged);
    // console.log("Datos Logged?", JSON.stringify(logged));
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/faqs">| FAQs |</Link>
          {/* <Link to="/tasks">| Tasks|</Link> */}
          <Link to="/task/1">| Task 1 |</Link>
          <Link to="/task/2">| Task 2 |</Link>
          <Link to="/any404">| Not Existing Route |</Link>
          <Link to="/login">| Login ||</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/online-state" element={<Statepage />}></Route>
            <Route path="/login" element={<Loginpage />}>
              {logged
                ? () => {
                    alert("You are logged in. Redirecting to home...");
                    return <Route path="/" />;
                  }
                : () => {
                    <Loginpage />;
                  }}
            </Route>
            <Route path="/about" element={<Aboutpage />}></Route>
            <Route path="/faqs" element={<Aboutpage />}></Route>
            <Route path="/profile" element={<Profilepage />}>
              {logged ? (
                <Profilepage />
              ) : (
                () => {
                  return <Route path="/login" />;
                }
              )}
            </Route>
            <Route path="/tasks" element={<Taskspage />}></Route>
            <Route
              exact
              path="/task/:id"
              element={<Taskdetailpage task={taskList} />}
            ></Route>
            {/* <Route
              exact
              path="/task/:id"
              render={({ match }) => (
                <Taskdetailpage task={taskList[match.params.id - 1]} />
              )}
            ></Route> */}
            {/* 404 - Page No Found */}
            <Route path="/any404" element={<Notfoundpage />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
