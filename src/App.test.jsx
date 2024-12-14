// import {describe, expect, test} from 'vitest';
// import {fireEvent, render, screen} from '@testing-library/react';
// import App from './App';

// describe('counter tests', () => {
    
//   test("Counter should be 0 at the start", () => {
//     render(<App />);
//     expect(screen.getByText('count is: 0')).toBeDefined();
//   });

//   test("Counter should increment by one when clicked", async () => {
//     render(<App />);
//     const counter = screen.getByRole('button');
//     fireEvent.click(counter);
//     expect(await screen.getByText('count is: 1')).toBeDefined();
//   });

// });
// import {describe, it,} from 'vitest';
// import {render, screen} from '@testing-library/react';
// import App from './App';

// describe('launching', () => {
//   it('should show the current year', () => {
//     render(<App />);
//     screen.getByText(/2018/);
//   });
// });


// import {describe, it,} from 'vitest';
// import {render, screen} from '@testing-library/react';
// import App from './App';

// describe('launching', () => {
//   it('should show the current year', async () => {
//     render(<App />);
//     await screen.findByText(/2018/);
//   });
// });


// import {describe, it, vi} from 'vitest';
// import {render, screen} from '@testing-library/react';
// import App from './App';
// import {useAuthState, useDbData} from './utilities/firebase';

// const mockSchedule = {
//   "title": "CS Courses for 1850-1851",
//   "courses": {
//   }
// };

// vi.mock('./utilities/firebase');

// beforeEach(() => {
//   useDbData.mockReturnValue([mockSchedule, null]);
//   useAuthState.mockReturnValue([null]);
// });

// afterEach(() => {
//   vi.resetAllMocks();
// });

// describe('launching', () => {
//   it('should show the current year', () => {
//     render(<App />);
//     screen.getByText(/1850/);
//   });
// });




// //last test

// import {beforeEach, describe, expect, it, vi} from 'vitest';
// import {render, screen} from '@testing-library/react';
// import App from './App';
// import { selectable } from './utilities/meetings';
// import {useAuthState, useDbData} from './utilities/firebase';

// const mockSchedule = {
//   "title": "CS Courses for 1850-1851",
//   "courses": { 
//     "F101": {
//       "term": "Fall",
//       "number": "101",
//       "meets": "MWF 11:00-11:50",
//       "title": "Computer Science: Concepts, Philosophy, and Connections"
//     },
//     "F111": {
//         "term": "Fall",
//         "number": "111",
//         "meets": "MWF 13:00-13:50",
//         "title": "Fundamentals of Computer Programming I"
//     },
//     "F211": {
//         "term": "Fall",
//         "number": "211",
//         "meets": "MWF 12:30-13:50",
//         "title": "Fundamentals of Computer Programming II"
//     },
//     "W110": {
//       "term": "Winter",
//       "number": "110",
//       "meets": "TuTh 16:00-17:20",
//       "title": "Intro Programming for non-majors"
//     },
//     "S110": {
//       "term": "Spring",
//       "number": "110",
//       "meets": "MWF 11:00-11:50",
//       "title": "Intro Programming for non-majors"
//     }
//   }
// };

// vi.mock('./utilities/firebase');

// beforeEach(() => {
//   useDbData.mockReturnValue([mockSchedule, null]);
//   useAuthState.mockReturnValue([null]);
// });

// afterEach(() => {
//   vi.resetAllMocks();
// });

// describe('launching', () => {
//   it('should show the current year', () => {
//     render(<App />);
//     screen.getByText(/1850/);
//   });
// });

// describe('term selection', () => {
//   it('should show fall courses initially', () => {
//     render(<App />);
//     screen.getByText(/Fall CS 101/);
//     expect(useDbData).toHaveBeenCalledTimes(1);
//   });
  
//   it('should show winter courses when winter term selected', async () => {
//     render(<App />);
//     screen.getByText('Winter').click();
//     await screen.findByText(/Winter CS 110/);
//     expect(useDbData).toHaveBeenCalledTimes(2);
//   });
// });


// describe('course conflicts', () => {
//   it('should allow same time, different terms', () => {
//     expect(selectable(mockSchedule.courses.F101, [mockSchedule.courses.S110])).toBeTruthy();
//   });
//   it('should reject MWF 13:00-13:50 and MWF 12:30-13:50', () => {
//     expect(selectable(mockSchedule.courses.F111, [mockSchedule.courses.F211])).toBeFalsy();
//   })
// });

