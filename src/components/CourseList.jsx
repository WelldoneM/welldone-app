import React from 'react';
import './CourseList.css'
import { Card } from 'react-bootstrap';

const CourseList = ({ courses }) => (
  <div className="course-list">
    {Object.keys(courses).map((courseKey) => {
      const course = courses[courseKey];
      return (
        <Card key={courseKey} className="course-card">
          <Card.Body className="d-flex flex-column">
            <Card.Title><strong>{course.term} {course.number}</strong></Card.Title>
            <Card.Text>{course.title}</Card.Text>
          </Card.Body>
          <div className="card-footer">
              {course.meets}
            </div>
        </Card>
      );
    })}
  </div>
);

export default CourseList;
