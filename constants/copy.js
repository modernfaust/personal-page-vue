const content = {
  navItems: {
    logo: "/babel_blue.png",
    logoAlt:"tower_of_babel_blue_logo",
    github: "https://github.com/modernfaust",
    linkedin: "https://www.linkedin.com/in/edward-lee-dev/",
    resume: "https://www.dropbox.com/scl/fi/8wd6jo3b4d9t4er8mjvy5/Lee_Edward_Resume.pdf?rlkey=z7v3fgqiltgw7x8vivptrgunp&dl=0",
  },
  hero: {
    image: "",
    alt: "",
    header: "Hi, I'm Edward",
    subheader: "I'm a software engineer in Toronto",
    description: "",
  },
  feature: {
    image: "/laptop_image.webp",
    alt: "laptop_lamp_cactus_coffee",
    avatar: "/avatar.png",
    avatarAlt: "asian_programmer",
    header: "Innovation and Iteration",
    subheader: "",
    description:"From small VBA scripts to production grade web components, I solve hard problems in creative ways. Since entering tech, I've produced software that saves companies millions. I'm now working in the world of web development.",
  },
  experience: [
    {
      image: "/bambeehr.png",
      alt: "bambee_logo",
      companyName: "BambeeHR",
      url: "https://www.bambee.com/",
      position: "Software Engineering Intern",
      date: "February 2023 to Present",
      description: [
        "Engineered and maintained modular, responsive and reusable UI components in Vue.",
        "Integrated CMS to enable the marketing team to autonomously author new pages, optimizing page development by 40%.",
        "Conducted code reviews, increasing the code quality by providing constructive feedback and mentoring other interns.",
        "Improved core repositories by reviewing code as per company standard, encouraging areas of improvement and ensuring code quality.",
        "Authored technical documentation in Confluence detailing the setup up of API endpoints in new repositories, which reduced developer onboarding time by 50%.",
      ],
    },
    {
      image: "/BR.png",
      companyName: "Broadridge Financial",
      alt: "broadridge_logo",
      position: "Support Analyst",
      url: "https://www.broadridge.com",
      date: "April 2020 to Present",
      description: [
        "Refactored and maintained process automation & data visualization modules in VBA, resulting in a 40% decrease in task time for the operations department.",
        "Developed SQL queries and stored procedures to debug application bugs in production, providing timely resolution to issues.",
        "Collaborated within Agile teams, coordinating the development, testing, and deployment of novel business solutions.",
        "Conducted end-to-end testing for new application releases, validating backend-to-frontend communication, data rendering, and adherence to design specifications.",
      ],
    },
  ],
  projects: [
    {
      image: "",
      projectName: "Personal Page",
      languages: ["Vue", "TypeScript", "NuxtJS", "Tailwind"],
      description: [
        "Secure, general purpose portfolio website framework optimized for SEO that supports Server Side Rendering",
        "Powered by Nuxt2",
      ],
      links: [
        ["github", "url_here"],
        ["webpage", "url_here"],
      ],
    },
    {
      image: "",
      projectName: "Mutual Fund Order Modules",
      languages: ["VBA", "SQL", "Python", "Bash"],
      description: [
        "Proprietary tooling & automation modules for Broadridge enhancing back office mutual funds transaction processing",
        "Fast scraping, manipulation, classification, visualization of mutual fund data from mainframe",
        "Enhances operations team velocity by 80%",
      ],
    },
    {
      image: "",
      projectName: "Still Alive",
      languages: ["JavaScript", "HTML", "CSS"],
      description: [
        "Procedurally generated top down shooting game",
        "Unique physics and map generation engine",
      ],
      links: [
        ["github", "url_here"],
        ["webpage", "url_here"],
      ],
    },
    {
      image: "",
      projectName: "Lost in Funland",
      languages: ["JavaScript", "HTML", "CSS"],
      description: ["Procedurally generated infinite scrolling game"],
    },
  ],
  skills: [
    "javascript",
    "sql",
    "python",
    "react",
    "vue",
    "nuxt",
    "html",
    "css",
    "sass",
    "java",
    "c#",
  ],
};

export default content;
