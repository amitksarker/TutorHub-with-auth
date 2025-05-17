import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  // Router,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home';
import MainLayout from './Layout/MainLayout';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import AuthProvider from './Context/AuthProvider';
import AddTutorials from './Components/AddTutorials';
import MyTutorials from './Components/MyTutorials';
import TutorialUpdate from './Components/TutorialUpdate';
import LanguageDetails from './Components/LanguageDetails';
import FindTutors from './Components/FindTutors';
import TutorDetails from './Components/TutorDetails';
import UpdateTutorials from './Components/UpdateTutorials';
import MyBookedTutor from './Components/MyBookedTutor';
import PrivateRoutes from './Router/PrivateRoutes';
// import ReviewsSection from './Components/ReviewsSection';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1> Error Page </h1>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'Login',
        element: <Login></Login>
      },
      {
        path: 'Registration',
        element: <Registration></Registration>
      },
      {
        path: 'FindTutors',
        element: <FindTutors></FindTutors>
      },
      {
        path: 'find-tutors/:language',
        element: <FindTutors></FindTutors>
      },
      {
        path: 'tutor/:details',
        element: <PrivateRoutes> <TutorDetails></TutorDetails> </PrivateRoutes>
      },
      {
        path: 'AddTutorials',
        element: <PrivateRoutes> <AddTutorials></AddTutorials> </PrivateRoutes>
      },
      {
        path: 'MyTutorials',
        element: <PrivateRoutes> <MyTutorials></MyTutorials> </PrivateRoutes>
      },
      {
        path: 'TutorialUpdate',
        element: <TutorialUpdate></TutorialUpdate>
      },
      {
        path: 'categories/:id',
        element: <LanguageDetails></LanguageDetails>
      },
      {
        path: 'UpdateTutorials/:id',
        element: <UpdateTutorials />,
        loader: ({params}) => fetch(`http://localhost:3000/tutorials/${params.id}`)
      },
      {
        path: 'MyBookedTutor',
        element: <PrivateRoutes> <MyBookedTutor></MyBookedTutor> </PrivateRoutes>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
