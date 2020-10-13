
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Hamza Bouamair",
  title: "Hi all, I'm Hamza",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/hbouamair",
  linkedin: "https://www.linkedin.com/in/hamza-bouamair-10b461186/",
  gmail: "hamza.bouamair@gmail.com",
 // gitlab: "https://gitlab.com/hamza.bouamair",
  //facebook: "https://www.facebook.com/hamza.bouamair",
 // medium: "https://medium.com/hamzabouamair",
  
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications "),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
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
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },

   
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: " National School of Computer Science and Systems Analysis",
      logo: require("./assets/images/unnamed.jpg"),
      subHeader: "Master specialized in the Internet of Things ",
      duration: "September 2010 - July 2021",
     
    },
    {
      schoolName: " Ibn Zohr Faculty of Science",
      logo: require("./assets/images/ibnzohr.jpg"),
      subHeader: "Bachelor of science  in mathematical and computer science",
      duration: "September 2015 - July 2019",
     
    },
    {
      schoolName: "Joulane High School",
      logo: require("./assets/images/aljoulane.jpg"),
      subHeader: "baccalaureate of Science in Mathematics",
      duration: "July 2015",
     
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Initiation project in development.",
      company: "University Ibn Zohr",
      companylogo: require("./assets/images/jeucarte.jpg"),
      date: "oct 2017 – Nov 2017",
      desc: "Development of a card game",
      descBullets: [
     
        "C , GTK "
      ]
    },
    {
      role: " End of Studies Project",
      company: "University Ibn Zohr",
      companylogo: require("./assets/images/ibnzohr.jpg"),
      date: "Jan 2018 –  juin 2018",
      desc: "Development of a web portal for the IT department",
      descBullets: [
     
        "Css , Html , symphony, MySQL , BootStrap"
      ]
    },
    {
      role: "Internship in web development",
      company: "Link Center",
      companylogo: require("./assets/images/linkcenter.png"),
      date: "Sep 2018 – Nov 2018",
      desc: "Creation of a Link Center website",
      descBullets: [
     
        "Html , Css , Laravel , Mysql , Bootsrap"
      ]
    },
    
    {
      role: "Internship in web development",
      company: "NhCom",
      companylogo: require("./assets/images/logonh.png"),
      date: "Sept 2020 – October 2020",
      desc: "Creation of an E-commerce website ",
      descBullets: [
     
        "React , nodeJs, MongoDB , redux  "
      ]


    
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "hbouamair", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Startup Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/LOGO.webp"),
      link: "http://bizconsult.uk/"
    },
   
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Python for everybody",
      subtitle: "Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data..",
      image: require("./assets/images/logoph.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1BW8WONfMZfsx9GVQcLbWS5hurU8duYX9/view?usp=sharing" },
        
      ]
    },
    
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212 655581500",
  email_address: "Hamza.bouamair@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "Hbouamair"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
