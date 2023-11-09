// import { SET_COURSES, ENROLL_COURSE, MARK_COURSE_COMPLETED } from "./action";
import { SET_COURSES, SELECT_COURSE } from './action';
const initialState = {
  courses: [],
  enrolledCourses: [],
};

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_COURSES:
//       return { ...state, courses: action.payload };
//     case ENROLL_COURSE:
//       return { ...state, enrolledCourses: [...state.enrolledCourses, action.payload] };
//     case MARK_COURSE_COMPLETED:
//       // Implement logic to mark a course as completed
//       return state;
//     default:
//       return state;
//   }
// };

// export default rootReducer;



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_COURSES:
        return {
          ...state,
          courses: action.payload,
        };
      case SELECT_COURSE:
        return {
          ...state,
          selectedCourse: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  