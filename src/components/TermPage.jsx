import React, { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from './CourseList';
import ScheduleModal from './ScheduleModal';

const TermPage = ({ courses }) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleCourseSelection = (courseKey) => {
        setSelectedCourses(prevSelected =>
            prevSelected.includes(courseKey)
            ? prevSelected.filter(key => key !== courseKey)
            : [...prevSelected, courseKey]
        );
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <div className="d-flex justify-content-between">
                <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
                <button className="btn btn-outline-primary" onClick={openModal}>Course Plan</button>
            </div>
            <CourseList
                courses={courses}
                selectedCourses={selectedCourses}
                toggleCourseSelection={toggleCourseSelection}
            />
            <ScheduleModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                selectedCourses={selectedCourses}
                courses={courses}
            />
        </div>
    );
};

export default TermPage;
