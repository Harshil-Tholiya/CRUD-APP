import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function EditFaculties() {
  const params = useParams();
  const navigate = useNavigate();

  const [Faculty, setFaculty] = useState([]);
  useEffect(() => {
    fetch("https://631418adfc9dc45cb4e9354a.mockapi.io/Faculty/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculty(res);
      });
  }, []);

  return (
    <>
      <div className="row">
        <div className="leftpart">
          <div className="row">
            <div className="col-2 text-right">Faculty Name:</div>
            <div className="col text-left">
              <input
                type="text"
                value={Faculty.FacultyName}
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
                value={Faculty.FacultyDesignation}
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
                value={Faculty.FacultyImage}
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
                value={Faculty.FacultyHighestEucation}
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
                value={Faculty.FacultyExperience}
                onChange={(e) => {
                  setFaculty({ ...Faculty, FacultyExperience: e.target.value });
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
                value={Faculty.FacultyWorkingSince}
                onChange={(e) => {
                  setFaculty({
                    ...Faculty,
                    FacultyWorkingSince: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2 text-right">Mobile Number:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                value={Faculty.MobileNumber}
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
                value={Faculty.FacultyEmail}
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
                value={Faculty.FacultySeating}
                onChange={(e) => {
                  setFaculty({ ...Faculty, FacultySeating: e.target.value });
                }}
              />
            </div>
          </div>
          <br />
        </div>
        <div className="rightpart">
          <div className="row">
            <div className="col-2 text-right">Faculty Profile Description:</div>
            <div className="col-6 text-left">
              <input
                type="text"
                value={Faculty.FacultyProfile}
                onChange={(e) => {
                  setFaculty({ ...Faculty, FacultyProfile: e.target.value });
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
                value={Faculty.FacultySpecialization}
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
            <div className="col-6 text-left">
              <input
                type="text"
                value={Faculty.SubjectTaught}
                onChange={(e) => {
                  setFaculty({ ...Faculty, SubjectTaught: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        className="b1"
        onClick={() => {
          console.log("start fetch");
          fetch(
            "https://631418adfc9dc45cb4e9354a.mockapi.io/Faculty/" + params.id,
            {
              method: "PUT",
              body: JSON.stringify(Faculty),
              headers: {
                "Content-Type": "application/json",
              }
            }
          ).then((res) => {
            
            navigate("/Faculties");
          });
        }}
      >
        Edit
      </button>
    </>
  );
}
