import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error404';
import './assets/CSS/App.css';
import DisplayArtical from './pages/DisplayArtical';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/science",
    element: <DisplayArtical category="science" key="science"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/health",
    element: <DisplayArtical category="health" key="health"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/business",
    element: <DisplayArtical category="business" key="business"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/entertainment",
    element: <DisplayArtical category="entertainment" key="entertainment"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sports",
    element: <DisplayArtical category="sports" key="sports"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/technology",
    element: <DisplayArtical category="technology" key="technology"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage/>,
    errorElement: <ErrorPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();