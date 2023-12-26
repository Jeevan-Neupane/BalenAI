import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import CameraPage from "./pages/CameraPage";
import SuspectPage from "./pages/SuspectPage";
import GraphPage from "./pages/GraphPage";
import UserPage from "./pages/UserPage";
import SingleVideoPage from "./pages/SingleVideoPage";

/**
 * Main App component responsible for setting up the React Router and defining routes.
 *
 * @returns {JSX.Element} The root component of the application.
 */
function App() {
  // Create a BrowserRouter and define routes using React Router.
  const [screenshotHistory, setScreenshotHistory] = useState([]);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        {/* Home Page */}
        <Route
          index
          element={<HomePage screenshotHistory={screenshotHistory} />}
        />
        {/* Cameras Page */}
        <Route
          path='/cameras'
          element={<CameraPage />}
        />
        {/* Suspects Page */}
        <Route
          path='/suspects'
          element={<SuspectPage suspects={screenshotHistory} />}
        />
        {/* User Page */}
        <Route
          path='/user'
          element={<UserPage />}
        />
        {/* Single Video Page */}
        <Route
          path='/video/:name'
          element={
            <SingleVideoPage
              screenshotHistory={screenshotHistory}
              setScreenshotHistory={setScreenshotHistory}
            />
          }
        />
        {/* Graph Page */}
        <Route
          path='/graph'
          element={<GraphPage />}
        />
      </Route>
    )
  );

  // Provide the router to the application using RouterProvider.
  return <RouterProvider router={router} />;
}

// Export the App component as the default export.
export default App;
