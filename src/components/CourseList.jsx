import React from 'react';

const CourseList = ({ courses }) => (
  <ul>
    {Object.keys(courses).map((courseKey) => {
      const course = courses[courseKey];
      return (
        <li key={courseKey}>
          <p>{course.term} {course.number}: {course.title}</p>
        </li>
      );
    })}
  </ul>
);

export default CourseList;
