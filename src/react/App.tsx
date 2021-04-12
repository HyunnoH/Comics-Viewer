import "antd/dist/antd.css";
import React from "react";
import Sidebar from "./feature/side-bar";
import Home from "./feature/home";
import MainLayout from "./layouts/main";

import { BrowserRouter, Route } from "react-router-dom";
import Viewer from "./feature/viewer";
import DetailViewer from "./feature/detail-viewer";

function App() {
  return (
    <BrowserRouter>
      <MainLayout siderChildren={<Sidebar />}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/manga" exact>
          <Viewer />
        </Route>
        <Route path="/manga/:fileId">
          <DetailViewer />
        </Route>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
