// CourseItem.js

import React from "react";

const CourseItem = ({ course }) => {
  return (
    <li >
      <h3> Cource Name:{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
     <p>description:{course.description}</p>
     <p>enrollmentStatus: {course.enrollmentStatus}</p>
     <p>duration:{course.duration}</p>
     <p>schedule: {course.schedule}</p>
     <p>location:{course.location}</p>
    </li>
  );
};

export default CourseItem;
