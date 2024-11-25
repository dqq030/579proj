export const coreCourses = [
  {
    name: "SI 501",
    desc: "Contextual Inquiry and Consulting Foundations",
    credit: 3,
    status: "Not Taken",
    // prereq: ["SI 506"],
    // coreq: ["SI 504"],
  },
  {
    name: "SI 506",
    desc: "Programming I",
    credit: 3,
    status: "Not Taken",
  },
];

export const masteryPrerequisiteCourses = [
  {
    name: "SI 504",
    desc: "Servers, The Shell, and Git",
    credit: 1.5,
    status: "Not Taken",
  },
  {
    name: "SI 507",
    desc: "Intermediate Programming",
    credit: 3,
    status: "Not Taken",
    prereq: ["SI 506"],
    coreq: ["SI 504"],
  },
  {
    name: "SI 544",
    desc: "Introduction to Statistics and Data Analysis",
    credit: 3,
    coreq: ["SI 618"],
    status: "Not Taken",
  },
  {
    name: "SI 568",
    desc: "Intro to Applied Data Science",
    credit: 1.5,
    status: "Not Taken",
  },
  {
    name: "SI 602",
    desc: "Math Foundations",
    credit: 3,
    status: "Not Taken",
    prereq: ["SI 504", "SI 506", "SI 544"],
  },
  {
    name: "SI 618",
    desc: "Data Manipulation and Analysis",
    credit: 3,
    status: "Not Taken",
    prereq: ["SI 506", "SI 544"],
    coreq: ["SI 507"],
  },
  {
    courses: [
      {
        name: "SI 670",
        desc: "Applied Machine Learning",
        credit: 3,
        prereq: ["SI 506", "SI 507", "SI 544", "SI 618"],
        coreq: ["SI 602"],
      },
      {
        name: "SI 671",
        desc: "Data Mining",
        credit: 3,
        prereq: ["SI 506", "SI 507", "SI 544", "SI 618"],
        coreq: ["SI 602"],
      },
    ],
    relations: ["OR"],
    status: "Not Taken",
  },
];

export const selectiveCourses = [
  {
    name: "SI 608",
    desc: "Networks",
    credit: 3,
    prereq: ["SI 506", "SI 507"],
    coreq: ["SI 618"],
    status: "Not Taken",
  },
  {
    name: "SI 649",
    desc: "Information Visualization",
    credit: 3,
    prereq: ["SI 506", "SI 507", "SI 544"],
    status: "Not Taken",
  },
  {
    name: "SI 650",
    desc: "Information Retrieval",
    credit: 3,
    prereq: ["SI 506", "SI 507", "SI 618"],
    status: "Not Taken",
  },
  {
    name: "SI 630",
    desc: "Natural Language Processing: Algorithms and People",
    credit: 3,
    prereq: ["SI 506", "SI 507", "SI 618"],
    status: "Not Taken",
  },
  {
    courses:[{
    name: "SI 670",
    desc: "Applied Machine Learning",
    credit: 3,
    prereq: ["SI 506", "SI 507", "SI 544", "SI 618"],
    coreq: ["SI 602"],
    },
    {name: "SI 671",
    desc: "Data Mining",
    credit: 3,
    prereq: ["SI 506", "SI 507", "SI 544", "SI 618"],
    coreq: ["SI 602"],
    }],
    relations: ['AND'],
    status: "Not Taken",
  },
];

export const masteryCourses = [
  {
    name: "SI 699",
    desc: "Big Data Analytics",
    credit: 3,
    prereq: [
      "SI 501",
      "SI 504",
      "SI 506",
      "SI 507",
      "SI 544",
      "SI 568",
      "SI 602",
      "SI 618",
      "& SI 670/SI 671",
    ],
    status: "Not Taken",
  },
];
