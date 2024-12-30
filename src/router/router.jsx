import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/Home/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";
import AllJobs from "../Pages/AllJobs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Page not found</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'jobs/:id',
            element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader:({params}) => fetch(`https://job-portal-server-lyart.vercel.app/jobs/${params.id}`)
        },
        {
          path:'JobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path:'myApplications',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path:'addJob',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'jobs',
          element:<AllJobs></AllJobs>
        },
        {
          path:'myPostedJobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path: 'viewApplications/:job_id',
          element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
          loader:({params}) => fetch(`https://job-portal-server-lyart.vercel.app/job-applications/jobs/${params.job_id}`)
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'signin',
            element:<SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router;