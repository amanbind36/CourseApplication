import React from "react";
import { useSelector } from "react-redux";

const StudentDashboard = () => {
    const selectedCourse = useSelector((state) => state.selectedCourse);
console.log("selectedCourse",selectedCourse)
  return (
    <div>
      <h2 style={{fontWeight:'bolder',fontSize:'40px'}}>Student Dashboard</h2>
      <h1>Hi Aman Bind</h1>
      <h1>You are Enroll in </h1>
      {selectedCourse ? (
        <div>
             <img src={selectedCourse.img} alt="" />
          <h3>{selectedCourse.name}</h3>
          <p>Instructor: {selectedCourse.instructor}</p>
          <p>Description: {selectedCourse.description}</p>
          <p>Status: {selectedCourse.enrollmentStatus}</p>
         
          {/* Display other course details as needed */}
        </div>
      ) : (
        <p>Course not found</p>
      )}
    </div>
  );
};

export default StudentDashboard;
