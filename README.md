579 project report


Team Members: Qian Dong
Date: Dec 8, 2024


Useful Links
Deployed page:
Demo:
Codes: 


Introduction
The Degree Progress Tracker is a tool for students to monitor their academic progress toward graduation, providing features to track completed and remaining credits, course statuses, and prerequisite requirements. Rather than relying on manual methods or external documents, students can use this app to easily visualize their academic journey and stay organized. This user-friendly platform is designed to simplify academic planning by allowing students to update and access their information efficiently. It’s only for UMSI students in Big Data Analytics in this phase. 


Achieved Features
Course Status Indicators: Courses will display indicators that toggle between “not taken”, “enrolled”, “finished” and “waved” giving students a clear view of each course's current state.
Data Persistence: Using local storage, the app can save the course progress, preserving data across sessions. A save button ensures data is backed up, while a reset button allows users to clear and update stored information.
Prerequisites and Corequisites Management: Courses with prerequisites or corequisites will feature visual markers, helping students organize their schedules and meet all requirements in the proper sequence. An alert will be displayed on clicking save to remind users of unsatisfied requisites.
Credits Calculation: Automatically tracks and calculates finished and enrolled credits, giving students an overview of their progress toward degree requirements.
Course Group Status: Each course group dynamically updates its status based on the completion of courses, providing students with a summary view of their progress within specific course categories.

Struggles
Combined Course Requirements: Managing the data structure and logic for courses with multiple prerequisites and corequisites proved challenging, requiring the development of a new component to handle these complex relationships.
Alert Logic: Ensuring appropriate alerts for unmet prerequisites or corequisites was tricky, particularly in cases where multiple requirements were linked.
Course Group Status Updating: The dynamic updating of course group statuses needs useEffect and clear logic
Toggle Button: Implementing a responsive and accessible toggle button using Material-UI posed minor difficulties, particularly in maintaining visual consistency.
Save Button: Ensuring the save button remained fixed and easily accessible during page scrolling required careful consideration of UI/UX principles.

Possible Future Improvements
Elective Course Adder: Introduce a feature that allows students to add elective courses, making the system more flexible and comprehensive.
Visual Indication for Unmet Requirements: Enhance user experience by changing the color of prerequisite and corequisite courses before triggering alerts, providing a subtle visual warning.
Mobile Responsiveness: Optimize the interface for mobile devices to improve accessibility and usability on smaller screens.
