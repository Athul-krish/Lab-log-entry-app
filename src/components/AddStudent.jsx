import axios from "axios";
import React, { useState } from "react";
import Navbar from "./NavBar";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    dept: "",
    sem: "",
    course: "",
    systemNumber: "",
    loginTime: "",
    logoutTime: "",
    date: "",
  });

  const inputHandler = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const submit = () => {
    console.log(student);
    axios
      .post("http://localhost:3000/add-entry", student)
      .then((res) => {
        console.log(res.data);
        alert("Entry Added Succuessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col col-12 col-sm-10 col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-header bg-primary text-white text-center">
                <h3>Add Student</h3>
              </div>

              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Student Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={student.name}
                    onChange={inputHandler}
                    placeholder="Enter Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Department</label>
                  <select
                    className="form-select"
                    name="dept"
                    value={student.dept}
                    onChange={inputHandler}
                  >
                    <option value="">-- Select Department --</option>
                    <option value="MCA">MCA</option>
                    <option value="BCA">BCA</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="ME">Mechanical</option>
                    <option value="CE">Civil</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Semester</label>
                  <input
                    type="text"
                    className="form-control"
                    name="sem"
                    value={student.sem}
                    onChange={inputHandler}
                    placeholder="Select Semester"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Course</label>
                  <input
                    type="text"
                    className="form-control"
                    name="course"
                    value={student.course}
                    onChange={inputHandler}
                    placeholder="Select Course"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">System Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="systemNumber"
                    value={student.systemNumber}
                    onChange={inputHandler}
                    placeholder="Enter System Number"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Login Time</label>
                  <input
                    type="time"
                    className="form-control"
                    name="loginTime"
                    value={student.loginTime}
                    onChange={inputHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Logout Time</label>
                  <input
                    type="time"
                    className="form-control"
                    name="logoutTime"
                    value={student.logoutTime}
                    onChange={inputHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={student.date}
                    onChange={inputHandler}
                  />
                </div>

                <div className="text-center">
                  <button className="btn btn-success" onClick={submit}>
                    Add Student
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
