import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Course = ({
  name,
  desc,
  credit,
  status,
  setCourseStatus,
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
      <div style={{ display: "flex", flexDirection: "column", flex: 3, margin: 5 }}>
        <p style={{ margin: 4 }}>
          <b>{name}</b> {desc}
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
      </div>
      <p style={{ flex: 1 }}>{credit}</p>
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

export default Course;
