import {
    // About
    mobile,
    backend,
    creator,
    web,
    // Skills
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    // Works
    meta,
    starbucks,
    tesla,
    shopify,
    slide,
    design,
    iu,
    iec,
    flib,
    hiptech,
    // Certificate
    slideCer,
    hackathon,
    nhanvan,
    ux,


    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "skill",
        title: "Skills",
    },
    {
        id: "project",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Graphics Designer",
        icon: web,
    },
    {
        title: "UI/UX Designer",
        icon: mobile,
    },
    {
        title: "Reactjs Developer",
        icon: backend,
    },
    {
        title: "Web Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Powerpoint Freelance Designer",
        company_name: "9slide Fanpage",
        icon: slide,
        iconBg: "#d8180a",
        date: "Oct 2020 - Mar 2021",
        link: "",
        points: [
            "Receive orders from customers on facebook and zalo groups to create presentation slides. ",
            "Consulting content layout for customers to create an attractive presentation for viewers. ",
            "Use powerpoint to create media publications such as slides, posters, banners and short videos. ",
        ],
    },
    {
        title: "Freelance Graphic Designer",
        company_name: "Social Media",
        icon: design,
        iconBg: "#A9D2FE",
        date: "Mar 2021 - Jul 2022",
        link: "",
        points: [
            "Receive orders from customers on facebook and zalo groups to create media publications like Banners, Posters, Logos, Brochures.",
            "Design Application: Adobe Illustrator - Photoshop - After Effects.",
            "Sketch - Prototype - Wireframe the User Interface (UI) using Figma.",
            "Basic video editing using Canva, Powerpoint or Microsoft Clipchamp.",
        ],
    },
    {
        title: "Teaching Assistant",
        company_name: "International University - VNU ",
        icon: iu,
        iconBg: "#FFFFFF",
        date: "Feb 2022 - Jun 2022",
        link: "",
        points: [
            "Subject: Critical Thinking Course.",
            "Help teachers manage students' scores and answer questions from learners.",
        ],
    },
    {
        title: "Graphic Design Specialist",
        company_name: "IECenter - English Centre",
        icon: iec,
        iconBg: "#E6DEDD",
        date: "Jul 2022 - Apr 2023",
        link: "",
        points: [
            "Design media publications with company identity like Banners, Posters, Logos, Brochures.",
            "Fanpage Admin: design social posts and plan events related to the occasion and come up with a suitable design theme to attract web viewers. ",
            "Design Application: Adobe Illustrator - Photoshop - After Effects.",
            "Design Slide Education Materials for Teaching purposes using Powerpoint and Canva.",
            "Design Company landing page using Figma. ",
        ],
    },
    {
        title: "UI - Graphic Designer",
        company_name: "FLIB - Fairy Library prject",
        icon: flib,
        iconBg: "#F29C9D",
        date: "Jul 2022 - Apr 2023",
        link: "",
        points: [
            "Co-founder of FLIB - Fairy Library: a reading application for children with a treasure of Vietnamese fairy tales",
            "Design User Interface (UI) Mobile version of Flib project by Sketching, Wireframing and Prototyping",
            "Participate in the discussion of the development direction of the project and the feasibility of the technology",
            "Achievement: Third Price of Người Nhân Văn Khởi Nghiệp mùa 2 held by University of Social Sciences and Humanities",
        ],
    },
    {
        title: "Intern Front End Developer",
        company_name: "Hiptech",
        icon: hiptech,
        iconBg: "#FFFFFF",
        date: "Jun 2023 - Now",
        link: "",
        points: [
            "Reactjs - Taiwindcss",
        ],
    },
];
const certificate = [
    {
        name: "Slide Design Certificate",
        platform:"9slide course",
        description:
            "I archived this certificate by completing 9slide Powerpoint Presentation Design online course.",
        image: slideCer,
        form:"Online",
        ref_link: "https://drive.google.com/file/d/18oilsKOc4mm_Vlmq-mAu5e59SRAjCqKM/view?usp=drive_link",
    },
    {
        name: "Best Innovation Award",
        platform:"IT Hackathon IU 2022",
        description:
            "I archived this certificate by participate in IT Hackathon IU 2020 and won Best Innovation Award. ",
        image: hackathon,
        form:"Online",
        ref_link: "https://drive.google.com/file/d/1y86hmYIDOQOMg7ndt8X-tTyStxBhj3MZ/view?usp=drive_link",
    },
    {
        name: "Third Prize",
        platform:"Nguoi Nhan Van Khoi Nghiep 2022",
        description:
            "I archived this certificate by reach to the final round of the competition with FLIB project and won Third Prize",
        image: nhanvan,
        form:"Online",
        ref_link: "https://drive.google.com/drive/folders/1ZAM5DMkG6BcJL6ooMDexfXJGLe6C1rs7?usp=drive_link",
    },
    {
        name: "UX design Certificate",
        platform:"Coursera",
        description:
            "I archived this certificate by completing Foundations of UX design online course.",
        image: ux,
        form:"Online",
        ref_link: "https://drive.google.com/file/d/1FIxfw_RIRnoc5YjRNrhun_JOKwPYYFJ1/view?usp=drive_link",
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export {
    services,
    technologies,
    experiences,
    certificate,
    testimonials,
    projects,
};
