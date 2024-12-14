import React from 'react';

const ScheduleModal = ({ isOpen, closeModal, selectedCourses, courses }) => {
    if (!isOpen) return null;

    return (
        <div className="modal show" style={{ display: 'block', backdropFilter: 'blur(5px)' }} tabIndex="-1" onClick={closeModal}>
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Selected Courses</h5>
                    </div>
                    <div className="modal-body">
                        {selectedCourses.length > 0 ? (
                            selectedCourses.map(courseKey => (
                                <div key={courseKey} className="p-2">
                                    <strong>{courses[courseKey].term} CS {courses[courseKey].number}:</strong> {courses[courseKey].title} <br />
                                    <small>{courses[courseKey].meets}</small>
                                </div>
                            ))
                        ) : (
                            <p>No courses selected. Please select courses from the list.</p>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleModal;
