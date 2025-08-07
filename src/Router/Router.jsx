import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/signIn/SignIn";
import JobDEtails from "../Pages/Home/JobDEtails";
import PrivateRouter from "../Routes/PrivateRouter";
import JobApply from "../Pages/JobApplay/JobApply";
import MyApplications from "../Pages/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDEtails,
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRouter>
            <MyApplications></MyApplications>
          </PrivateRouter>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
    ],
  },
]);

export default router;
