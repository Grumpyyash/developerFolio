/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Yash Vardhan",
  title: "Hey! I'm Yash",
  subTitle: emoji(
    "Full-Stack Developer | Aspiring Programmer | Mathematics and Computing'2024 at IIT(ISM) Dhanbad"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1izJ5BKOf3hQpBi-ViFpppMMv2irQsn-hcpeq4SO0U_4/edit?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Grumpyyash",
  linkedin: "https://www.linkedin.com/in/yash-vardhan-688952188/",
  gmail: "yashvardhan513@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100039280729807",
  medium: "https://yash-dn.medium.com/",
  twitter: "https://www.facebook.com/profile.php?id=100039280729807",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Develop and Learn!",
  skills: [
    emoji(
      "Open Source ❤️"
    ),
    emoji("Full-Stack Applications with hands on Native Development 🚀"),
    emoji(
      "Javascript >>>>> Python 🎯"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IIT(ISM) Dhanbad",
      logo: require("./assets/images/ISM_logo.png"),
      subHeader: "Integrated Master of Technology in Mathematics and Computing",
      duration: "July 2019 - Present",
      desc: "CGPA: 9.34"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Dev", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Dev",
      progressPercentage: "75%"
    },
    {
      Stack: "Native Dev",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Google Summer of Code'21",
      company: "SCoRe Lab",
      companylogo: require("./assets/images/gsoc-logo.png"),
      date: "May 2021 – Present",
      desc: "Student Developer to work on the project Webiu and develop a genearlized website builder along with npm and gatsby plugins",
    },
    {
      role: "Developer",
      company: "Koobbox",
      companylogo: require("./assets/images/kb-logo.jpeg"),
      date: "June 2020 – Aug 2020",
      desc: "Worked in ateam to develop their official e-commerce website from scratch and integarte APIs, payment gateways and deployment"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Some of the achievements that keeps me motivated!",

  achievementsCards: [
    {
      title: "3rd Runner up HackFest'21",
      subtitle:
        "National Level Development Hackathon Conducted by IIT Dhanbad",
      image: require("./assets/images/hack-logo.jpg"),
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/orgs/AnnadataHackfest/dashboard"
        }
      ]
    },
    {
      title: "Winner FallFest'20",
      subtitle:
        "National Level Development hackathon conducted by ACM student chapter",
      image: require("./assets/images/acm-logo.jpg"),
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/Grumpyyash/MediFast"
        }
      ]
    },

    {
      title: "1st Runner up Hackoverflow'21",
      subtitle: "Best Feasibility of idea Award from NIT Durgapur",
      image: require("./assets/images/overflow-logo.jpeg"),
      footerLink: [
        {
          name: "Devfolio Submission",
          url: "https://devfolio.co/submissions/medifast-5d91"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Some of the experiences of my really small programming journey",

  blogs: [
    {
      url: "https://medium.com/scorelab/gsoc-2021-a-new-beginning-6b3e77b0f204",
      title: "GSoC 2021: A New Beginning",
      description:
        "I share my experience of getting into open-source and more about the orgaization that I chose for GSoC"
    },
    {
      url: "https://medium.com/scorelab/gsoc-2021-community-bonding-3e06c4e6e357",
      title: "GSoC 2021: Community Bonding Period",
      description:
        "What is Community Bonding Period in GSoC and how it helps you grow as a developer in community"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have something for me even cricket, reach out to me!",
  number: "+92-9065676023",
  email_address: "yashavardhan513@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
