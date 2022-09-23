import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function FacultyDetails() {
  let params = useParams();
  let navigate = useNavigate();
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    fetch("https://631418adfc9dc45cb4e9354a.mockapi.io/Faculty/" + params.id, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculty(res);
      });
  }, []);

  return (
    <>
      <div className="container-detail">
        <table>
          <tr>
            <td>
              <div className="container">
                <div className="col-md-3 mb-5">
                  <div className="card col-md-4">
                    <div className="card-body text-center">
                      <div className=" ">
                        <img
                          className="card-img-top"
                          src={faculty.FacultyImage}
                        ></img>
                      </div>
                      <h4 className="mb-2">{faculty.FacultyName}</h4>
                      <h6 className="mb-2 text-primary">
                        {faculty.FacultyDesignation}
                      </h6>

                      <span>--------------------</span>
                      <h6 className="text-primary">
                        {faculty.FacultyHighestEucation}
                      </h6>
                      <span>--------------------</span>
                      <div className="row text-center">
                        <div className="col-6">
                          <span>
                            <h6>Experience</h6>
                          </span>
                          <span>
                            <h6 className="text-primary">
                              {faculty.FacultyExperience}
                            </h6>
                          </span>
                        </div>
                        <div className="col-6">
                          <span className="d-block g-md-5">
                            <h6 className="">Working Since</h6>
                          </span>
                          <span>
                            <h6 className="text-primary">
                              {faculty.FacultyWorkingSince}
                            </h6>
                          </span>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-5 text-left">Mobile No. </div>
                          <div className="col-7 text-right">
                            {faculty.MobileNumber}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4 text-left">Email : </div>
                          <div className="col-8 text-right">
                            {faculty.FacultyEmail}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4 text-left">Seating :</div>
                          <div className="col-6 text-right">
                            {faculty.FacultySeating}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            <td className="a1">
              <div className="">
                <div className="col-8 mx-md-5">
                  <div className="row text-danger border-bottom">
                    <h2>Profile</h2>
                  </div>
                  <div className="row mt-md-4">
                    <p>{faculty.FacultyProfile}</p>
                  </div>

                  <div className="row ">
                    <div className="col-3 text-danger">
                      <h6>Area Of Specialization</h6>
                    </div>

                    <div className="col-9 text-weight-light">
                      <p>{faculty.FacultySpecialization}</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-3 text-danger">
                      <h6>Subjects Taught</h6>
                    </div>
                    <div className="col-9 text-weight-light">
                      <p>{faculty.SubjectTaught}</p>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <button
        className="b1"
        onClick={() => {
          fetch(
            "https://631418adfc9dc45cb4e9354a.mockapi.io/Faculty/" + params.id,
            { method: "DELETE" }
          ).then((res) => {
            navigate("/Faculties");
          });
        }}
      >
        Delete
      </button>
      <button
        className="b2 btn-primary"
        onClick={() => {
          navigate("../Faculties/edit/" + params.id);
        }}
      >
        Edit
      </button>
    </>
  );
}
