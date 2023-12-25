import React from "react";
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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />

        <Route
          path='/cameras'
          element={<CameraPage />}
        />

        <Route
          path='/suspects'
          element={<SuspectPage />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
