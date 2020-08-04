import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing/index";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList/Index";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-class" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
