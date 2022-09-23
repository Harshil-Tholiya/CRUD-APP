import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AddFaculty() {
  const navigate = useNavigate();

  const [Faculty, setFaculty] = useState([]);
  useEffect(() => {
    fetch("https://631418adfc9dc45cb4e9354a.mockapi.io/Faculty")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        res.SetFaculty(res);
      });
  }, []);

  return (
    <>
      <div className="d1">
        <div>
          {/* <div className="row"> */}
          {/* <div className="leftpart"> */}
          <div className="row">
            <div className="col-2 text-right">Faculty Name:</div>
            <div className="col text-left">
              <input
                type="text"
                onChange={(e) => {
                  setFaculty({ ...Faculty, FacultyName: e.target.value });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2 text-right">Faculty Designation:</div>
            <div className="col text-left">
              <input
                type="text"
                onChange={(e) => {
                  setFaculty({
                    ...Faculty,
                    FacultyDesignation: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2 text-right">FacultyImage:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                onChange={(e) => {
                  setFaculty({ ...Faculty, FacultyImage: e.target.value });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2 text-right">FacultyEducation:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                onChange={(e) => {
                  setFaculty({
                    ...Faculty,
                    FacultyHighestEucation: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2 text-right">Faculty Experience:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                onChange={(e) => {
                  setFaculty({
                    ...Faculty,
                    FacultyExperience: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2 text-right">Working Since</div>
            <div className="col-6 text-left">
              <input
                type="text"
                onChange={(e) => {
                  setFaculty({
                    ...Faculty,
                    FacultyWorkingSince: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <br />
        <div>
          <div className="row">
            <div className="col-2 text-right">Mobile Number:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                onChange={(e) => {
                  setFaculty({ ...Faculty, MobileNumber: e.target.value });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2 text-right">Faculty Email</div>
            <div className="col-6 text-left">
              <input
                type="text"
                onChange={(e) => {
                  setFaculty({ ...Faculty, FacultyEmail: e.target.value });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2 text-right">Faculty Seating</div>
            <div className="col-6 text-left">
              <input
                type="text"
                onChange={(e) => {
                  setFaculty({
                    ...Faculty,
                    FacultySeating: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <br />
        </div>
        {/* <div className="rightpart"> */}
        <div className="row">
          <div className="col-2 text-right">Faculty Profile Description:</div>
          <div className="col-6 text-left">
            <input
              type="text"
              onChange={(e) => {
                setFaculty({
                  ...Faculty,
                  FacultyProfile: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-2 text-right">Faculty Specialization</div>
          <div className="col-6 text-left">
            <input
              type="text"
              onChange={(e) => {
                setFaculty({
                  ...Faculty,
                  FacultySpecialization: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-2 text-right">Subject Taught:</div>
          <div className="col text-left">
            <input
              type="text"
              onChange={(e) => {
                setFaculty({ ...Faculty, SubjectTaught: e.target.value });
              }}
            />
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <br />
      <button
        className="b1"
        onClick={() => {
          fetch("https://631418adfc9dc45cb4e9354a.mockapi.io/Faculty", {
            method: "POST",
            body: JSON.stringify(Faculty),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            navigate("/Faculties");
          });
        }}
      >
        Add
      </button>
    </>
  );
}
