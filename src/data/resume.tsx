import { Icons } from "@/components/icons";

export const DATA = {
  name: "Harsh Upadhyay",
  initials: "HU",
  url: "https://harshupadhyay.vercel.app",
  location: "Mumbai, IN",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Third-year Computer Science Engineering student passionate about coding, backend development, and exploring new technologies. Active on GitHub and eager to learn and share knowledge.",
  summary:
    "As a third-year Computer Science Engineering student at [Thakur College of Engineering and Technology](/#education), I contribute to open-source projects like [Arka Linux GUI (prev. Arch Linux GUI)](https://github.com/arch-linux-gui) and develop applications such as ALG's welcome app using Golang, React, and TailwindCSS. As the GDSC TCET leader, I organized workshops to enhance technical skills within the community. With a strong interest in backend development and DevOps engineering, I strive to learn, innovate, and contribute to impactful tech solutions.",
  avatarUrl: "/me.jpeg",
  skills: {
    Languages: ["JavaScript", "TypeScript", "Python", "Go", "Java"],
    Frontend: ["React", "Next.js", "TailwindCSS"],
    Backend: [
      "Node.js",
      "Express",
      "NestJS",
      "Spring Boot",
      "Gin-Gonic",
      "Go-Fiber",
    ],
    Databases: ["MongoDB", "PostgreSQL"],
    DevOps: ["Docker", "Kubernetes", "CircleCI", "AWS", "Azure"],
    Other: ["Linux", "Git", "GitHub Actions"],
  },
  contact: {
    email: "upadhyayharsh533@gmail.com",
    tel: "+91",
    social: {
      GitHub: {
        url: "https://github.com/harshau007",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/upadhyay-harsh/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/Harshs_twt",
        icon: Icons.x,
      },
    },
  },
  experience: {
    work: [
      {
        company: "Hireintel.ai",
        badges: ["Go", "Go-Gonic", "MongoDB", "SendGrid", "AWS EC2", "Nginx"],
        href: "https://hireintel.ai",
        location: "Mumbai, IN",
        title: "Golang Developer Intern",
        logoUrl: "/hireintel.webp",
        start: "November 2024",
        end: "Present",
        description: [
          "Developed a robust backend system using Golang and Gin-Gonic on a modular monolithic architecture, improving system scalability and maintainability, and reducing response time by 30%.",
          "Implemented an automated emailing service using SendGrid, increasing user engagement by 20% through effective communication workflows.",
          "Deployed the application on AWS EC2 with Nginx as a reverse proxy, ensuring 99.9% uptime, and collaborated with the frontend team to resolve bugs, reducing reported issues by 15%.",
        ],
      },
      {
        company: "TCET-Opensource",
        badges: [
          "Linux",
          "Git",
          "GitHub Action",
          "Docker",
          "Kubernetes",
          "AWS EKS",
        ],
        href: "https://opensource.tcetmumbai.in",
        location: "Mumbai, IN",
        title: "Production Engineer (Team Lead)",
        logoUrl: "/tcetOpensource.png",
        start: "July 2023",
        end: "April 2024",
        description: [
          "Implemented an automated daily unit testing service for a product in development, reducing the time required for bug identification and fixing by team members.",
          "Streamlined the software delivery lifecycle by introducing continuous integration and deployment (CI/CD), resulting in a 25% reduction in delivery time and fewer production defects.",
          "Optimized application performance and infrastructure scalability, achieving significant improvements in response time and overall system efficiency.",
        ],
      },
      // {
      //   company: "TCET Shastra Coding Club",
      //   href: "https://www.linkedin.com/company/tcet-shastra-coding-club",
      //   badges: [],
      //   location: "Mumbai, IN",
      //   title: "Problem Tester",
      //   logoUrl: "/tcetShastra.jpg",
      //   start: "November 2022",
      //   end: "July 2023",
      //   description: [
      //     "Developed a comprehensive Welcome Application using the Wails framework, integrating Golang and React, enabling seamless system-level communication and providing a modern UI for Arka Linux",
      //     "Implemented essential features in the Welcome Application, including system updates, mirrorlist management, and theme customization, significantly improving the user onboarding experience and system flexibility",
      //     "Redesigned and maintained the Arka Linux GUI website using Next.js and TailwindCSS, enhancing user navigation, accessibility, and overall aesthetics",
      //   ],
      // },
    ],
    opensource: [
      {
        company: "Arka Linux GUI",
        href: "https://github.com/arch-linux-gui",
        badges: [
          "Linux",
          "Bash",
          "Git",
          "Go",
          "ReactJs",
          "NextJs",
          "TailwindCSS",
        ],
        location: "Mumbai, IN",
        title: "Developer & Maintainer",
        logoUrl: "/alg.png",
        start: "April 2024",
        end: "Present",
        description: [
          "Developed a comprehensive Welcome Application using the Wails framework, integrating Golang and React, enabling seamless system-level communication and providing a modern UI for Arka Linux",
          "Implemented essential features in the Welcome Application, including system updates, mirrorlist management, and theme customization, significantly improving the user onboarding experience and system flexibility",
          "Redesigned and maintained the Arka Linux GUI website using Next.js and TailwindCSS, enhancing user navigation, accessibility, and overall aesthetics",
        ],
      },
      {
        company: "GDSC TCET",
        href: "https://tcet-opensource.github.io/gdsc-website",
        badges: [
          "Team management",
          "Mentoring",
          "Workshop facilitation",
          "GCP",
        ],
        location: "Mumbai, IN",
        title: "Google Cloud Study Jam Facilitator",
        logoUrl: "/gdsctcet.jpg",
        start: "September 2023",
        end: "April 2024",
        description: [
          "Managed a group of 150 students in Google Cloud Study Jam, implementing effective program delivery strategies, resulting in high engagement and completion rates.",
          "Organized and conducted technical workshops and events, focusing on enhancing skills within the community, leading to improved technical knowledge and participation.",
        ],
      },
    ],
  },
  education: [
    {
      school: "Thakur College Of Engineering and Technology",
      href: "https://www.tcetmumbai.in/",
      degree: "Bachlor Of Engineering in Computer Science Engineering",
      logoUrl: "/tcet.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "DevBox",
      href: "https://github.com/harshau007/devbox-desktop",
      dates: "May 2024 - Present",
      active: true,
      description:
        "DevBox is a powerful tool to create and manage isolated containers for developers with their desired technology stacks or Database, such as Node.js, Python, Rust, Mongo, Postgres and more.",
      technologies: [
        "Go",
        "Docker",
        "Wails Framework",
        "ReactJs",
        "TailwindCSS",
        "Shadcn",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/harshau007/devbox-desktop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/DevBox.gif",
      video: "",
    },
    {
      title: "ALG Welcome",
      href: "https://github.com/arch-linux-gui/alg-welcome",
      dates: "April 2024 - Present",
      active: true,
      description:
        "A user-friendly Welcome application for Arka Linux GUI, aiding users in navigating Arch-based Linux distributions efficiently.",
      technologies: ["Go", "ReactJs", "TailwindCSS", "Wails Framework"],
      links: [
        {
          type: "Source",
          href: "https://github.com/arch-linux-gui/alg-welcome",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/welcome.png",
      video: "",
    },
    {
      title: "ALG Website",
      href: "https://github.com/arch-linux-gui/alg-welcome",
      dates: "April 2024 - Present",
      active: true,
      description:
        "Developed a comprehensive website using Next.js that includes documentation, blogs, and donation pages, enhancing user engagement and providing valuable resources for the community.",
      technologies: ["NextJs", "TailwindCSS", "Fumadocs"],
      links: [
        {
          type: "Website",
          href: "https://arkalinuxgui.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/harshau007/alg-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/alg-web.gif",
      video: "",
    },
    {
      title: "TCET-Linux",
      href: "https://linux.tcetmumbai.in",
      dates: "June 2023 - February 2024",
      active: true,
      description:
        "An open-source operating system providing basic services, and various software packages for students.",
      technologies: [
        "Linux",
        "Arch",
        "Shell",
        "Git",
        "GitHub",
        "GitHub Action",
      ],
      links: [
        {
          type: "Website",
          href: "https://linux.tcetmumbai.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tcet-opensource/tcet-linux",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tcetlinux.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    {
      title: "Ace Of Hacks",
      dates: "March 30th - 31st, 2024",
      location: "Mumbai, In",
      description:
        "A Docker monitoring web application that provides real-time insights into container performance and resource usage.",
      image:
        "https://ace-of-hacks.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Faed990c0b5224b4f8fbe9fa617382b0b%2Fassets%2Ffavicon%2F860.jpeg&w=1440&q=75",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/harshau007/ducker",
        },
      ],
    },
    {
      title: "Hackniche 2.0",
      dates: "February 17th - 18th, 2024",
      location: "Mumbai, In",
      description:
        "Developed a web application which helps students to find housing near their colleges.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65b3549a2ebd4_logo.png?d=200x200",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/harshau007/SahayataAwas-backend",
        },
      ],
    },
    {
      title: "Skynet Hacks",
      dates: "October 29, 2021",
      location: "Kingston, Ontario",
      description:
        "Developed a website that provides comprehensive details and updates about the James Webb Space Telescope, offering users an in-depth look at its missions and discoveries.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/002/117/943/datas/full_width.PNG",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/space-info-r9tpv5",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/harshau007/SKYNET-HACKATHON-PROJECT",
        },
      ],
    },
  ],
} as const;
