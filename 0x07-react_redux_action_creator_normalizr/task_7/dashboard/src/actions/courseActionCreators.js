import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';
import store from '../store';

const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

const CourseActions = {
  selectCourse,
  unSelectCourse,
};
// Bind the action creators
const boundCourseActions = bindActionCreators(CourseActions, store.dispatch);

export default boundCourseActions;
