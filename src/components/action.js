// export const SET_COURSES = "SET_COURSES";
// export const ENROLL_COURSE = "ENROLL_COURSE";
// export const MARK_COURSE_COMPLETED = "MARK_COURSE_COMPLETED";


// src/actions.js
export const SET_COURSES = 'SET_COURSES';
export const SELECT_COURSE = 'SELECT_COURSE';
export const MARK_COURSE_COMPLETED = 'MARK_COURSE_COMPLETED';

export const markCourseCompleted = (courseId) => ({
  type: MARK_COURSE_COMPLETED,
  payload: courseId,
});
export const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses,
});

export const selectCourse = (course) => ({
  type: SELECT_COURSE,
  payload: course,
});
