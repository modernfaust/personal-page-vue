const content = {
  hero: {
    image: "/shiba_inu.png",
    header: "Hi, I'm Edward",
    subheader: "I'm a software engineer in Toronto",
    description: "",
  },
  experience: [
    {
      image: "/bambeehr.png",
      companyName: "BambeeHR",
      position: "Software Engineering Intern",
      date: "February 2023 to Present",
      description: [
        "Engineered and maintained modular, responsive and reusable UI components in Vue, utilizing in-house libraries to enhance SEO by 15%.",
        "Integrated BuilderIO (visual content management system) into a Nuxt app by refactoring build parameters, enabling the marketing team to autonomously author new pages with custom Vue components and optimizing page development by 40%.",
        "Resolved server side rendering load de-sync bug in production by refactoring Nuxt route generation, optimizing load times by 75%.",
        "Improved core repositories by reviewing code as per company standard, encouraging areas of improvement and ensuring code quality.",
        "Interfaced daily with a team of 4 engineers, communicating with product and QA in an Agile environment to ensure product quality and continuous improvement.",
        "Resolved urgent frontend rendering bugs by reproducing errors in dev environment, re-engineering the code and developing timely fixes.",
        "Authored technical documentation in Confluence detailing the setup up of API endpoints in new repositories, which reduced developer onboarding time by 50%.",
        "Researched frontend optimization opportunities by analyzing bundle sizes of historical commits, writing a report to reduce Single Page Application startup time by 30%.",
        "Debugged and performed QA on live web applications to ensure cross-browser compatibility, responsiveness and optimal performance.",
      ],
    },
    {
      image: "/broadridge.webp",
      companyName: "Broadridge Financial",
      position: "Support Analyst",
      date: "April 2020 to Present",
      description: [
        "Refactored and maintained process automation & data visualization modules in VBA, resulting in a 40% decrease in task time for the operations department.",
        "Developed SQL queries and stored procedures to debug application bugs in production, providing timely resolution to issues.",
        "Collaborated with product and engineering in an Agile environment to organize the development, testing and deployment of new business solutions.",
        "Performed end-to-end testing for new app deployments by validating backend calls to the frontend, ensuring that response data is valid and data is rendered to the frontend per design specs.",
      ],
    },
  ],
  projects: [
    {
      image: "",
      projectName: "Personal Page",
      languages: ["Vue", "TypeScript", "NuxtJS", "Tailwind"],
      description: ["Secure, general purpose portfolio website framework optimized for SEO that supports Server Side Rendering",
        "Powered by Nuxt2"],
      links: [
        ["github", "url_here"], ["webpage", "url_here"],
      ],
    },
    {
      image: "",
      projectName: "Mutual Funds Order Processing Tools",
      languages: ["VBA", "SQL", "Python", "Bash"],
      description: ["Proprietary tooling & automation modules for Broadridge enhancing back office mutual funds transaction processing",
        "Fast scraping, manipulation, classification, visualization of mutual fund data from mainframe",
        "Enhances operations team velocity by 80%"],
    },
    {
      image: "",
      projectName: "Still Alive",
      languages: ["JavaScript", "HTML", "CSS"],
      description: ["Procedurally generated top down shooting game",
        "Unique physics and map generation engine"],
      links: [["github", "url_here"], ["webpage", "url_here"]],
    },
    {
      image: "",
      projectName: "Lost in Funland",
      languages: ["JavaScript", "HTML", "CSS"],
      description: ["Procedurally generated infinite scrolling game"],
    },
  ],
  skills: [
    "javascript", "sql", "python", "react", "vue", "nuxt", "html", "css", "sass", "java", "c#",
  ],
};

export default content;
