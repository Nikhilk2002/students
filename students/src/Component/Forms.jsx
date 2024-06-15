
import React, { useState } from "react";
import "./Form.css";
import { studentdata } from "../studentapi"; 

function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coursename: "",
    university: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await studentdata.save(formData);
      console.log("Data saved:", response);

      setFormData({
        name: "",
        email: "",
        coursename: "",
        university: "",
        year: "",
      });

    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="qualificationForm">
          <h2 style={{ textAlign: "center" }}>Enter your Details</h2>
          <div className="userDetails">
            <div className="input">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="qualificationSection">
            <div className="qualificationDropdown">
              <div className="qualificationInput">
                <label htmlFor="coursename">Course name:</label>
                <input
                  type="text"
                  id="coursename"
                  name="coursename"
                  placeholder="Enter course name"
                  value={formData.coursename}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="qualificationInput">
                <label htmlFor="university">University:</label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  placeholder="Enter university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="qualificationInput">
                <label htmlFor="year">Year:</label>
                <input
                  type="text"
                  id="year"
                  name="year"
                  placeholder="Enter year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
          <div className="displayQualification">
            <h3>Qualifications List</h3>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Forms;
