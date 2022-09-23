import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Faculties from "./Faculties";
import Home from "./Home";
import FacultyDetails from "./FacultyDetails";
import EditFaculties from "./EditFaculties";
import AddFaculty from "./AddFaculties";

const root = ReactDOM.createRoot(document.getElementById("root"));

function ConsumeApi() {
  // const navigate = useNavigate();
  // const param = useParams();
}
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="Faculties" element={<Faculties />}></Route>
          <Route path="/Faculties/:id" element={<FacultyDetails />}></Route>
          <Route path="/Faculties/add" element={<AddFaculty />}></Route>
          <Route path="/Faculties/edit/:id" element={<EditFaculties />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
