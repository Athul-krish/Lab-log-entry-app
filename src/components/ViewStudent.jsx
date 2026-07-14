import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";

const ViewStudent = () => {
  const [students, setStudents] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/view")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container mt-4">
      <h2 className="text-center mb-4">Student Entries</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Course</th>
              <th>System No.</th>
              <th>Login Time</th>
              <th>Logout Time</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {students.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.name}</td>
                  <td>{value.dept}</td>
                  <td>{value.sem}</td>
                  <td>{value.course}</td>
                  <td>{value.systemNumber}</td>
                  <td>{value.loginTime}</td>
                  <td>{value.logoutTime}</td>
                  <td>{value.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default ViewStudent;