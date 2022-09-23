import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Faculties() {
  const [faculties, setFaculties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://631418adfc9dc45cb4e9354a.mockapi.io/Faculty")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculties(res);
      });
  }, []);

  const formatedFaculties = faculties.map((tea) => {
    return (
      <>
        <div className="card text-center">
          <div
            className="card-body text-centre"
            onClick={() => {
              navigate("../Faculties/" + tea.id);
            }}
          >
            <div className="mt-3 mb-4">
              <img className="card-img-top" src={tea.FacultyImage}></img>
            </div>
            <h4 className="mb-2">{tea.FacultyName}</h4>
            <h6 className="mb-2 text-primary">{tea.FacultyDesignation}</h6>

            <span>--------------------</span>
            <h6 className="text-primary">{tea.FacultyHighestEucation}</h6>
            <span>--------------------</span>
            <div className="row text-center no-gutters">
              <div className="col-6">
                <span>
                  <h6>Experience</h6>
                </span>
                <span>
                  <h6 className="text-primary">{tea.FacultyExperience}</h6>
                </span>
              </div>
              <div className="col-6">
                <span className="">
                  <h6>Working Since</h6>
                </span>
                <span>
                  <h6 className="text-primary">{tea.FacultyWorkingSince}</h6>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
      // </Link>
    );
  });
  return (
    <div className="container-fluid ">
      <div className="mx-4 mb-5 border-bottom border-danger">
        <h2 className="text-danger">Computer Engineering</h2>
      </div>
      <div className="harshil">{formatedFaculties} </div>
    </div>
  );
}
