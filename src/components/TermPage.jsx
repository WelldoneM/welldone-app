import React, { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from './CourseList';

const TermPage = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const [selectedCourses, setSelectedCourses] = useState([]);

  const getCoursesByTerm = (courses, term) => {
    return Object.keys(courses).filter(courseKey => courses[courseKey].term === term);
  };

  const buildFilteredCourses = (courseKeys, courses) => {
    return courseKeys.reduce((filteredCourses, courseKey) => {
      filteredCourses[courseKey] = courses[courseKey];
      return filteredCourses;
    }, {});
  };

  const filteredCourseKeys = getCoursesByTerm(courses, selectedTerm);
  const filteredCourses = buildFilteredCourses(filteredCourseKeys, courses);

  const toggleCourseSelection = (courseKey) => {
    setSelectedCourses(prevSelected =>
      prevSelected.includes(courseKey)
      ? prevSelected.filter(key => key !== courseKey)
      : [...prevSelected, courseKey]
    );
  };

  return (
    <div>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseList
        courses={filteredCourses}
        selectedCourses={selectedCourses}
        toggleCourseSelection={toggleCourseSelection}
      />
    </div>
  );
};

export default TermPage;
