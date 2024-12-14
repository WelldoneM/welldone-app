import React from 'react';
import './CourseList.css';
import { Card } from 'react-bootstrap';
import { hasTimeConflict } from '../utilities/timeConflicts';

const CourseList = ({ courses, selectedCourses, toggleCourseSelection }) => (
  <div className="course-list">
    {Object.keys(courses).map((courseKey) => {
      const course = courses[courseKey];
      const isSelected = selectedCourses.includes(courseKey);
      const isSelectable = selectedCourses.every(selectedKey =>
        !hasTimeConflict(course, courses[selectedKey]));

      return (
        <Card 
          key={courseKey}
          className={`course-card ${isSelected ? 'selected' : ''} ${!isSelectable && !isSelected ? 'unselectable' : ''}`}
          onClick={() => isSelectable && toggleCourseSelection(courseKey)}
        >
          <Card.Body className="d-flex flex-column">
            <Card.Title><strong>{course.term} {course.number}</strong> - {course.title}</Card.Title>
            <Card.Text>{course.meets}</Card.Text>
          </Card.Body>
        </Card>
      );
    })}
  </div>
);

export default CourseList;
