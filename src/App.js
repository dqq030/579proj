import { useEffect, useState } from "react";
import "./App.css";
import CourseGroup from "./components/CourseGroup";
import {
  coreCourses,
  masteryPrerequisiteCourses,
  masteryCourses,
  selectiveCourses,
} from "./utils";
import Button from "@mui/material/Button";

function App() {
  const storedCoreCourses = JSON.parse(localStorage.getItem("coreCourses"));
  const storedMasteryPrerequisiteCourses = JSON.parse(
    localStorage.getItem("masteryPrerequisiteCourses")
  );
  const storedMasteryCourses = JSON.parse(localStorage.getItem("masteryCourses"));
  const storedSelectiveCourses = JSON.parse(localStorage.getItem("selectiveCourses"));
  const [coreCoursesStat, setCoreCoursesStat] = useState(
    storedCoreCourses||coreCourses
  );
  const [masteryPrerequisiteCoursesStat, setMasteryPrerequisiteCoursesStat] =
    useState(storedMasteryPrerequisiteCourses||masteryPrerequisiteCourses);
  const [masteryCoursesStat, setMasteryCoursesStat] = useState(
    storedMasteryCourses
    ||masteryCourses
  );
  const [selectiveCoursesStat, setSelectiveCoursesStat] = useState(
    storedSelectiveCourses||selectiveCourses
  );
  const [status, setStatus] = useState({
    coreCourses: false,
    masteryPrerequisiteCourses: false,
    masteryCourses: false,
    selectiveCourses: false,
  });
  const allCourses = [
    ...coreCoursesStat,
    ...masteryPrerequisiteCoursesStat,
    ...masteryCoursesStat,
    ...selectiveCoursesStat,
  ];

  useEffect(() => {
    const coreCoursesStatus = coreCoursesStat.every(
      (course) => course.status === "Finished"||course.status === "Waved"
    );
    const masteryPrerequisiteCoursesStatus = masteryPrerequisiteCoursesStat.every(
      (course) => course.status === "Finished"||course.status === "Waved"
    );
    const masteryCoursesStatus = masteryCoursesStat.every(
      (course) => course.status === "Finished"||course.status === "Waved"
    );
    const selectiveCoursesStatus = selectiveCoursesStat.filter(
      (course) => course.status === "Finished"||course.status === "Waved"
    ).length >= 2;
    setStatus({
      coreCourses: coreCoursesStatus,
      masteryPrerequisiteCourses: masteryPrerequisiteCoursesStatus,
      masteryCourses: masteryCoursesStatus,
      selectiveCourses: selectiveCoursesStatus,
    });
  }, [
    coreCoursesStat,
    masteryPrerequisiteCoursesStat,
    masteryCoursesStat,
    selectiveCoursesStat,
  ]);

  const reqAlert = () => {
    // 每一个不是not taken的course都要满足prereq和coreq条件
    for (const course of coreCoursesStat) {
      if (course.status !== "Not Taken") {
        if (course.prereq) {
          for (const prereq of course.prereq) {
            const prereqCourse = allCourses.find((c) => c.name === prereq);
            if (prereqCourse.status === "Not Taken"||prereqCourse.status === "Enrolled") {
              return `To take ${course.name} You need to take ${prereq} first`;
            }
          };
        }
        if (course.coreq) {
          for (const coreq of course.coreq) {
            const coreqCourse = allCourses.find((c) => c.name === coreq);
            if (coreqCourse.status === "Not Taken") {
              return `To take ${course.name} You need to take ${coreq} first or concurrently`;
            }
          };
        }
      }
    };
    for (const course of masteryPrerequisiteCoursesStat) {
      if (course.status !== "Not Taken") {
        if (course.prereq) {
          for (const prereq of course.prereq) {
            const prereqCourse = allCourses.find((c) => c.name === prereq);
            if (
              prereqCourse.status === "Not Taken" ||
              prereqCourse.status === "Enrolled"
            ) {
              return `To take ${course.name} You need to take ${prereq} first`;
            }
          };
        }
        if (course.coreq) {
          for (const coreq of course.coreq) {
            const coreqCourse = allCourses.find((c) => c.name === coreq);
            if (coreqCourse.status === "Not Taken") {
              return `To take ${course.name} You need to take ${coreq} first or concurrently`;
            }
          };
        }
      }
    };
    for (const course of selectiveCoursesStat) {
      if (course.status !== "Not Taken") {
        if (course.prereq) {
          for (const prereq of course.prereq) {
            const prereqCourse = allCourses.find((c) => c.name === prereq);
            if (prereqCourse.status === "Not Taken"||prereqCourse.status === "Enrolled") {
              return `To take ${course.name} You need to take ${prereq} first`;
            }
          };
        }
        if (course.coreq) {
          for (const coreq of course.coreq) {
            const coreqCourse = allCourses.find((c) => c.name === coreq);
            if (coreqCourse.status === "Not Taken") {
              return `To take ${course.name} You need to take ${coreq} first or concurrently`;
            }
          };
        }
      }
    };
    for (const course of masteryCoursesStat) {
      if (course.status !== "Not Taken") {
        if (course.prereq) {
          for (const prereq of course.prereq) {
            const prereqCourse = allCourses.find((c) => c.name === prereq);
            if (prereqCourse.status === "Not Taken"||prereqCourse.status === "Enrolled") {
              return `To take ${course.name} You need to take ${prereq} first`;
            }
          };
        }
        if (course.coreq) {
          for (const coreq of course.coreq) {
            const coreqCourse = allCourses.find((c) => c.name === coreq);
            if (coreqCourse.status === "Not Taken") {
              return `To take ${course.name} You need to take ${coreq} first or concurrently`;
            }
          };
        }
      }
    };
    return "";
  }

  const calFinishedCredits = (courses) => {
    let credits = 0;
    courses.forEach((course) => {
      if (course.status === "Finished") {
        if (typeof course.name === "string") {
          credits += course.credit;
        } else {
          if (course.relations[0] === "AND") {
            credits += course.courses[1].credit;
          } else {
            credits += course.courses[0].credit;
          }
        }
      }
    });
    return credits;
  };

  const calEnrolledCredits = (courses) => {
    let credits = 0;
    courses.forEach((course) => {
      if (course.status === "Enrolled") {
        if (typeof course.name === "string") {
          credits += course.credit;
        } else {
          if (course.relations[0] === "AND") {
            credits += course.courses[1].credit;
          } else {
            credits += course.courses[0].credit;
          }
        }
      }
    });
    return credits;
  };

  const totalFinishedCredits =
    calFinishedCredits(coreCoursesStat) +
    calFinishedCredits(masteryCoursesStat) +
    calFinishedCredits(selectiveCoursesStat) +
    calFinishedCredits(masteryPrerequisiteCoursesStat);

  const totalEnrolledCredits =
    calEnrolledCredits(coreCoursesStat) +
    calEnrolledCredits(masteryCoursesStat) +
    calEnrolledCredits(selectiveCoursesStat) +
    calEnrolledCredits(masteryPrerequisiteCoursesStat);

  return (
    <>
      <div className="App" style={{ margin: "20px 70px 70px 70px" }}>
        <h1>Course Planner</h1>
        <h2>Masters of Science in Information (MSI)</h2>
        <h3>Degree Requirements | Big Data Analytics | Cohort Fall 2023</h3>
        <p>
          Total Finished Credits:{" "}
          <span style={{ color: "blue" }}>{totalFinishedCredits}</span>, Total
          Enrolled Credits:{" "}
          <span style={{ color: "blue" }}>{totalEnrolledCredits}</span>
        </p>
        <div>
          <CourseGroup
            name="Core Courses"
            desc="It is required to enroll in Core Courses during the first semester of the MSI degree program. A minimum final grade of C- is required for all the courses listed below."
            courses={coreCoursesStat}
            status={status.coreCourses}
            setCourses={setCoreCoursesStat}
          />
          <CourseGroup
            name="Mastery Prerequisite Courses"
            desc="The Mastery Prerequisite Courses are a set of mandatory courses that must be completed to meet the eligibility requirements for enrolling in the Mastery Course (SI 699) for this Pathway. It is imperative that all Mastery Prerequisite Courses are successfully completed before the intended semester of pursuing the Mastery Course. A minimum final grade of C- is required for all the courses listed below."
            courses={masteryPrerequisiteCoursesStat}
            status={status.masteryPrerequisiteCourses}
            setCourses={setMasteryPrerequisiteCoursesStat}
          />
          <CourseGroup
            name="Selective Courses (Pick 2)"
            desc="It is required to complete TWO of the Selective Requirement courses from the list below to complete the MSI degree. These courses are not considered prerequisites to the Mastery Course and can be completed concurrently with the Mastery Course. A minimum final grade of C- is required for all the courses listed below."
            courses={selectiveCoursesStat}
            status={status.selectiveCourses}
            setCourses={setSelectiveCoursesStat}
          />
          <CourseGroup
            name="Mastery Courses"
            desc="The Mastery course (SI 699) serves as the culminating capstone course for the MSI degree. The successful completion of all Core Courses and Mastery Prerequisite Courses is a prerequisite requirement for enrolling in SI 699. Hence, it is essential to note that Core Courses and Mastery Prerequisite Courses cannot be taken concurrently with or subsequent to SI 699. The failure to meet the prerequisite requirements for the Mastery Course will result in delayed degree completion and graduation. A minimum final grade of C- is required for SI 699."
            courses={masteryCoursesStat}
            status={status.masteryCourses}
            setCourses={setMasteryCoursesStat}
          />
        </div>
        <div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button variant="contained"
          style={{ marginRight: 20 }}
          onClick={() => {
            setCoreCoursesStat(storedCoreCourses||coreCourses);
            setMasteryPrerequisiteCoursesStat(storedMasteryPrerequisiteCourses||masteryPrerequisiteCourses);
            setMasteryCoursesStat(storedMasteryCourses||masteryCourses);
            setSelectiveCoursesStat(storedSelectiveCourses||selectiveCourses);
          }}
        >Reset</Button>
        <Button variant="contained"
          onClick={() => {
            const alertMsg = reqAlert();
            if (alertMsg) {
              alert(`Failed Saving! ${alertMsg}!`);
            } else {
              alert("Saved");
              localStorage.setItem(
                "coreCourses",
                JSON.stringify(coreCoursesStat)
              );
              localStorage.setItem(
                "masteryPrerequisiteCourses",
                JSON.stringify(masteryPrerequisiteCoursesStat)
              );
              localStorage.setItem(
                "masteryCourses",
                JSON.stringify(masteryCoursesStat)
              );
              localStorage.setItem(
                "selectiveCourses",
                JSON.stringify(selectiveCoursesStat)
              );
            }
          }}
        >Save</Button>
      </div>
    </>
  );
}

export default App;