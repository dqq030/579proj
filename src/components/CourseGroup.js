import Course from "./Course";
import CourseComb from "./CourseComb";

const CourseGroup = ({ name, desc, status, courses, setCourses }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: 15 }}>
      <h3 style={{ marginBottom: 0, color: status ? "darkgreen" : "darkred" }}>
        {name} {status ? "✅" : ""}
      </h3>
      <p style={{ fontSize: 15, color: "#666" }}>{desc}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: 5,
          borderBottom: "1.5px solid #aaa",
        }}
      >
        <b style={{ flex: 3 }}>Course</b>
        <b style={{ flex: 1 }}>Credit</b>
        <b style={{ flex: 3 }}>Status</b>
      </div>
      {courses.map((course, index) => {
        if (typeof course.courses === "undefined") {
          return (
            <Course
              key={index}
              {...course}
              setCourseStatus={(newStatus) => {
                const newCourses = [...courses];
                newCourses[index].status = newStatus;
                setCourses(newCourses);
              }}
            />
          );
        } else {
          return (
            <CourseComb
              key={index}
              {...course}
              setCourseStatus={(newStatus) => {
                const newCourses = [...courses];
                newCourses[index].status = newStatus;
                setCourses(newCourses);
              }}
            />
          );
        }
      })}
    </div>
  );
};

export default CourseGroup;