import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CourseComb = ({
  courses,
  relation,
  status,
  setCourseStatus,
  credit,
  prereq = [],
  coreq = [],
}) => {
  const handleChange = (event, newStatus) => {
    setCourseStatus(newStatus);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
        padding: 5,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 3,
          margin: 5,
        }}
      >
        {courses.map((course, index) => (
          <div style={{ display: "flex", flexDirection: "column" }} key={index}>
            <p style={{ margin: 0 }}>
              <b>{course.name}</b> {course.desc}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {!!prereq.length && (
                <p style={{ color: "red", fontSize: 13, margin: 1 }}>
                  <b>Prereq</b>: {prereq.join(", ")}
                </p>
              )}
              {!!prereq.length && !!coreq.length && (
                <b style={{ color: "red", fontSize: 13, margin: 1 }}>|</b>
              )}
              {!!coreq.length && (
                <p style={{ color: "red", fontSize: 13, margin: 1 }}>
                  <b>Coreq</b>: {coreq.join(", ")}
                </p>
              )}
            </div>
            {index < courses.length - 1 && (
              <u style={{ textAlign: "center", margin: 2 }}>
                {relation}
              </u>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {courses.map((course, index) => (
          <p key={index}>{credit}</p>
        ))}
      </div>
      <ToggleButtonGroup
        style={{ flex: 3, justifyContent: "center" }}
        value={status}
        exclusive
        onChange={handleChange}
        aria-label="text alignment"
        size="small"
        color="primary"
      >
        <ToggleButton value="Not Taken" aria-label="Not Taken">
          Not Taken
        </ToggleButton>
        <ToggleButton value="Enrolled" aria-label="Enrolled">
          Enrolled
        </ToggleButton>
        <ToggleButton value="Finished" aria-label="Finished">
          Finished
        </ToggleButton>
        <ToggleButton value="Waved" aria-label="Waved">
          Waved
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default CourseComb;
