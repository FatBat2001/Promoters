import './App.css';
import Contact from "./pages/ContactUs/Contact";
import {Route, Routes} from "react-router-dom";
import Home from "../src/pages/HomePage/Home";
import Event from "./pages/EventPage/Event";
import Events from "../src/pages/EventsPage/Events";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ErrorPage from "../src/pages/ErrorPage/ErrorPage";
import { getCategoryList } from "./helper/helperFunctions";
import CreateEventForm from './pages/Dashboard/CreateEventForm';
import Login from './componenets/Login';
import App from './App';

import {
  createBrowserRouter,
} from "react-router-dom";
import CategoryPage from './pages/EventsPage/CategoryPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/', 
        element:<Home />,
      }, 
      {
        path:'/events', 
        element:<Events/>
      },  
      {
        path:'events/:category/', 
        element:<CategoryPage />, 
      }, 
      {
        path:'events/:category/:id', 
        element:<Event />
      }, 
      {
        path:'contact', 
        element:<Contact />
      },
    ]
  },
  {
    path:'/admin-create-event', 
    element:<CreateEventForm />
  },
  {
    path:'/admin-login',
    element:<Login />
  }, 
  {
    path:'/admin-dashboard', 
    element:<Dashboard />
  },
  {
    path:'*', 
    element:<ErrorPage /> 
  }, 
  
]);
export default router;  