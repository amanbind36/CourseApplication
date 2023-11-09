import React, { useState ,useEffect} from "react";
import { setCourses, selectCourse } from './action';
import Styles from './list.module.css'
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import dummyCourses from "./Data";
const CourseList = () => {
  const courses = dummyCourses
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      dispatch(setCourses(dummyCourses));
    }, 1000);
  }, [dispatch]);

  const handleCourseClick = (course) => {
    dispatch(selectCourse(course));
    // Navigate to course details screen
    navigate(`/course`);
  };


  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
      className={Styles.inp}
        type="text"
        placeholder="Search by Course Name or Instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredCourses.map((course) => (
        //   <CourseItem key={course.id} course={course} />
        <div className={Styles.container} key={course.id} onClick={() => handleCourseClick(course)} >
            <div>
                <img width='400px' height='350px' src= {course.img} alt="" />
               
            </div>
            <div style={{marginLeft:"80px",textAlign:"left"}}>
            <h3> Cource Name:{course.name}</h3>
        <p>Instructor: {course.instructor}</p>
       <p>description:{course.description}</p>
       <p>enrollmentStatus: {course.enrollmentStatus}</p>
       <p>duration:{course.duration}</p>
       <p>schedule: {course.schedule}</p>
       <p>location:{course.location}</p>
            </div>

      </div>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
