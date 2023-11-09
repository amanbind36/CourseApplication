import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import Styles from './detail.module.css'
import { useNavigate } from 'react-router-dom';
import {markCourseCompleted} from './action'
const CourseDetails = () => {

    const selectedCourse = useSelector((state) => state.selectedCourse);
//   const courseId = match.params.id;
//   const course = useSelector((state) =>
//     state.courses.find((course) => course.id === parseInt(courseId))
//   );

//   if (!course) {
//     return <div>Course not found!</div>;
//   }
const isEnrolled =useSelector ((state) => state.selectedCourse.isEnrolled);
const navigate = useNavigate();
const dispatch = useDispatch();
const [visible, setVisible] = useState(isEnrolled);
  const handleToggle = () => {
    setVisible((current) => !current);
    dispatch(markCourseCompleted(selectedCourse));
    // navigate(`/dashboard`);
    // if(visible==true){

    // }
  };

  return (
    <div>
    <h2>Course Details</h2>
    {selectedCourse && (
      <div style={{textAlign:"left",width:'40%',margin:"auto"}}>
        <img src={selectedCourse.img} alt="" />
        <h3>{selectedCourse.name}</h3>
        <p>Instructor: {selectedCourse.instructor}</p>
        <p>Description: {selectedCourse.description}</p>
        <p>Status: {selectedCourse.enrollmentStatus}</p>

       <p>enrollmentStatus: {selectedCourse.enrollmentStatus}</p>
       <p>duration:{selectedCourse.duration}</p>
       <p>schedule: {selectedCourse.schedule}</p>
       <p>location:{selectedCourse.location}</p>
       <p>syllabus:{selectedCourse.syllabus}</p>
        <button className={Styles.btn} onClick={handleToggle}> {!visible ? "Enrolle":"Not Enroll"} </button>
      </div>
    )}
  </div>
    // <div>
    //     <h1>course Details</h1>
    //   <h2>{course.name}</h2>
    //   <p>Instructor: {course.instructor}</p>
    //   <p>Description: {course.description}</p>
    //   <p>Enrollment Status: {course.enrollmentStatus}</p>
    //   <p>Duration: {course.duration}</p>
    //   <p>Schedule: {course.schedule}</p>
    //   <p>Location: {course.location}</p>
    //   <p>Pre-requisites: {course.prerequisites}</p>
    //   <details>
    //     <summary>Syllabus</summary>
    //     <p>{course.syllabus}</p>
    //   </details>
    // </div>
  );
};

export default CourseDetails;
