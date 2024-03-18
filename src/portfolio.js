/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kostiantyn Voiku",
  hello: "Hello, ",
  title: "I'm Kostiantyn",
  subTitle: emoji(
    "ISTQB Certified QA Engineer with 8+ years of experience. Proficient in Test Automation processes and deeply passionate about quality and testing, consistently driving excellence across all facets of software testing. Eager to contribute expertise and leadership to drive continuous improvement in a dynamic team environment."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hwyMDEC9-qqJG1sFnd3ozAbrAAqobEfA/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kostiantynvoiku",
  linkedin: "https://www.linkedin.com/in/kostiantynvoiku/",
  gmail: "kostiantyn.voiku@gmail.com",
  telegram: "https://t.me/konstantinxv",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AS A QA ENGINEERING ENTHUSIAST, I'M DEEPLY COMMITTED TO TESTING AND ENSURING SOFTWARE QUALITY. ",
  skills: [
    emoji(
      "⚡ Design a cutting-edge test automation architecture for web applications on all test levels;"
    ),
    emoji(
      "⚡ Develop, maintain, and execute automated test scripts using industry-standard testing frameworks and tools;"
    ),
    emoji(
      "⚡ Integrate automated tests into CI/CD pipelines to enable continuous testing and delivery of software updates;"
    ),
    emoji("⚡ Collaborate closely with cross-functional teams, to ensure alignment between QA processes and overall business goals."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Cypress",
      fontAwesomeClassname: "fas fa-microscope"
    },
    {
      skillName: "Robot Framework",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Pytest",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-window-maximize"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "SQL Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Gherkin",
      fontAwesomeClassname: "fas fa-solar-panel"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-scroll"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      //logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      //logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "QA ENGINEERING", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "QA Tech Lead, Test Manager",
      company: "StarOfService",
      companylogo: require("./assets/images/starofservice_logo.png"),
      date: "September 2017 – Present",
      desc: "I played a pivotal role in establishing and leading the QA Team, driving the development of comprehensive testing processes:",
      descBullets: [
        "Led initiatives to create a robust test infrastructure and designed cutting-edge test automation architectures for web applications across all testing levels;",
        "Developed, maintained, and executed automated test scripts using industry-standard testing frameworks and tools;",
        "Integrated automated tests into CI/CD pipelines to enable continuous testing and delivery of software updates;",
        "Collaborating closely with cross-functional teams, I ensured alignment between QA processes and overall business objectives to enhance web application monitoring for early detection of quality issues."
      ]
    },
    {
      role: "QA Enginner",
      company: "StarOfService, Int.",
      companylogo: require("./assets/images/sos_old_logo.png"),
      date: "March 2016 – September 2017",
      desc: "I joined the newly established team dedicated to expanding its product globally. A short list of activities I was responsible for:",
      descBullets: [
        "Conducted various types of testing including smoke, exploratory, functional, regression, UI, localization, and black box testing;",
        "Developed, executed, and maintained test cases to ensure comprehensive test coverage;",
        "Built and executed automation tests to enhance test efficiency and scalability;",
        "Operated in an Agile software development environment to support iterative and incremental development practices;",
        "Collaborated effectively with Product Managers, Developers, and DevOps teams to ensure alignment and synergy across project objectives."
      ]
    },
    {
      role: "QA Engineer",
      company: "QA TECH LAB",
      companylogo: require("./assets/images/qa-tech-lab.png"),
      date: "August 2015 – March 2016",
      desc: "I worked on diverse outsourced projects, primarily focusing on testing activities of web and mobile applications, including:",
      descBullets: [
        "Developed comprehensive test cases tailored to project requirements;",
        "Generated detailed bug reports to facilitate efficient issue resolution;",
        "Conducted rigorous testing of web applications to ensure functionality, usability, and compatibility across different browsers;",
        "Performed thorough testing of web applications to verify their performance, stability, and user experience;",
        "Performed mobile applications on both Android and iOS platforms to validate their functionality, responsiveness, and compatibility with diverse devices."
      ]
    },
    {
      role: "Data Engineer",
      company: "Illichivske Ins.",
      companylogo: require("./assets/images/illichivske.png"),
      date: "August 2010 – August 2015",
      desc: "In my role as a Data Engineer, I contributed to a dynamic team focused on leveraging data-driven insights to propel business growth, where I undertook the following responsibilities:",
      descBullets: [
        "Conducted in-depth data analysis to identify potential areas for improvement, ensuring the efficiency of testing processes;",
        "Developed and implemented comprehensive test cases, focusing on back-end services and database testing;",
        "Wrote and optimized queries for data analysis and reporting;",
        "Collaborated closely with IT, Marketing and Sales departments to ensure alignment across business goals;",
        "Spearheaded continuous improvement initiatives aimed at enhancing data processes and driving efficiency."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Testimonials 🤝",
  subtitle: "SOME FEEDBACKS FROM COLLEAGUES AND CLIENTS:",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Project1",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  //subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff",

  achievementsCards: [
    {
      title: "International Software Testing Qualifications Board®",
      subtitle: "ISTQB® is the international standard in the field of software testing certification.",
      image: require("./assets/images/istqb.png"),
      imageAlt: "ISTQB Logo",
      footerLink: [
        {name: "Verify certificate: 21-CTFL-3483-SEETB", url: "http://scr.istqb.org/?name=Voiku&number=21-CTFL-3483-SEETB"}
      ]
    }
  ], 
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 💬"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // email_address: ""
};



const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable
};
