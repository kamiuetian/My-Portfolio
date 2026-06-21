import {
  CodeIcon,
  MagicWandIcon,
  RocketIcon,
  GlobeIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

interface IconProps {
  width: number;
  height: number;
  className?: string;
}

const config = {
  header: {
    leftMenu: [
      {
        name: "Home",
        id: "/#home",
      },
      {
        name: "About",
        id: "/#about",
      },
      {
        name: "Expertise",
        id: "/#skills",
      },
      {
        name: "Projects",
        id: "/#portfolio",
      },
      {
        name: "Contact",
        id: "/#contact",
      },
    ],
    rightMenu: [
      {
        name: "Download Resume",
        href: "/MUHAMMAD_KAMRAN_Resume.pdf",
      },
    ],
  },
  banner: {
    title: "Full-Stack Developer, Tester, Lecturer",
    headline: {
      leading: "I build",
      highlight: "web, AI, and Web3 products",
      trailing: "from research ideas to production releases.",
    },
    subTitle:
      "I'm Muhammad Kamran, a full-stack developer and lecturer with 7+ years of experience in web and mobile application development. I have shipped products for Ranzo Tech, AdaYield, MyIslam, AIDFY, Anonibox, LifetimePDF, and other teams across MERN, WordPress, React Native, Python, Web3, and LLM workflows.",
    actionButton: [
      {
        name: "Let's collaborate",
        href: "/#contact",
      },
      {
        name: "View portfolio",
        href: "/#portfolio",
      },
    ],
  },
  about: {
    title: "About",
    subTitle: "Practical engineering backed by research and teaching",
    content:
      "I work at the intersection of software delivery, education, and applied AI research. Alongside remote product development, I teach mobile application development, web development, software quality assurance, and scripting languages at COMSATS University Islamabad, Attock campus.",
    highlights: [
      "Remote web developer for Ranzo Tech LLC, working across WordPress, MERN stack, Web3, and LLM-enabled products.",
      "Former remote developer for MyIslam.org, contributing across React, Node.js, React Native, Python, and Laravel.",
      "Lecturer supervising final-year projects in machine learning, computer vision, Web3, and generative AI.",
      "PhD research focus: integrating large language models and reinforcement learning for personalized recommender systems.",
    ],
    actionButton: {
      name: "View Resume",
      href: "/MUHAMMAD_KAMRAN_Resume.pdf",
    },
  },
  info: {
    data: [
      {
        title: "7+",
        subTitle: "Years building web and mobile apps",
      },
      {
        title: "20+",
        subTitle: "Products and platforms shipped",
      },
      {
        title: "4",
        subTitle: "AI, Web3, mobile, and web expertise",
      },
    ],
  },
  mySkills: {
    title: "Expertise",
    subTitle: "Where I create the most impact",
    content:
      "I build production software while teaching and researching the systems behind it. My work spans full-stack apps, CMS platforms, mobile products, AI utilities, Web3 dashboards, testing, and server management.",
    actionButton: {
      name: "Plan a project",
    },
    skills: [
      {
        icon: (props: IconProps) => {
          return <CodeIcon {...props} />;
        },
        title: "Full-Stack Engineering",
        subTitle:
          "React, Next.js, Node.js, PHP, Laravel, Python, MySQL, MongoDB, PostgreSQL, and Git.",
      },
      {
        icon: (props: IconProps) => {
          return <MagicWandIcon {...props} />;
        },
        title: "AI Research & Applied ML",
        subTitle:
          "Machine learning, computer vision, generative AI, recommender systems, LLMs, and reinforcement learning.",
      },
      {
        icon: (props: IconProps) => {
          return <RocketIcon {...props} />;
        },
        title: "Web3, Mobile & QA",
        subTitle:
          "Cardano products, wallet-aware apps, React Native, Unity, software quality assurance, and server management.",
      },
    ],
  },
  technologies: {
    title: "Technologies",
    subTitle:
      "Tooling I rely on to craft reliable, scalable, and intelligent user experiences.",
    technologies: [
      {
        name: "Next.js",
      },
      {
        name: "React",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Node.js",
      },
      {
        name: "Python",
      },
      {
        name: "FastAPI",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "Supabase",
      },
      {
        name: "AWS & Vercel",
      },
      {
        name: "Docker & CI/CD",
      },
      {
        name: "LangChain",
      },
      {
        name: "OpenAI & Azure OpenAI",
      },
      {
        name: "Pinecone & Vector DBs",
      },
      {
        name: "Solidity & Web3",
      },
      {
        name: "Ethereum & Cardano",
      },
    ],
  },
  portfolio: {
    title: "Projects",
    subTitle: "Selected product work",
    content:
      "A focused selection of shipped products and client platforms across AI tools, Web3, SaaS utilities, mobile/web apps, and content systems.",
  },
  blogs: {
    title: "Insights",
    subTitle: "Notes on AI research and product delivery",
    content:
      "Research notes on generative AI, recommender systems, and reinforcement learning, plus practical lessons from shipping products.",
    actionButton: "All articles",
  },
  contact: {
    title: "Contact",
    subTitle: "Let's build something meaningful",
    content:
      "Share your idea, research collaboration, or product challenge and I will respond with a clear plan and next steps.",
    fields: [
      {
        fieldName: "Full name",
      },
      {
        fieldName: "Your email",
      },
      {
        fieldName: "Project type",
      },
      {
        fieldName: "Estimated budget",
      },
      {
        fieldName: "Message",
      },
    ],
  },
  contactInfo: {
    call: {
      fieldName: "Schedule a call",
      value:
        "Available worldwide - Email to arrange a Zoom or Google Meet session.",
    },
    email: {
      fieldName: "Email me",
      value: "m.kamran@cuiatk.edu.pk",
    },
    address: {
      fieldName: "Location",
      value: "Remote - Pakistan (UTC+5)",
    },
  },
  footer: {
    leftContent: "Copyright 2026 Muhammad Kamran. All rights reserved.",
    centerContent:
      "Showcasing production work across AI, Web3, SaaS, mobile, and web platforms.",
    links: [
      {
        name: "Website",
        href: "https://muhammadkamran.dev",
        icon: (props: IconProps) => {
          return <GlobeIcon {...props} />;
        },
      },
      {
        name: "Fiverr",
        href: "https://www.fiverr.com/kami_uetian",
        icon: (props: IconProps) => {
          return <RocketIcon {...props} />;
        },
      },
      {
        name: "Email",
        href: "mailto:m.kamran@cuiatk.edu.pk",
        icon: (props: IconProps) => {
          return <EnvelopeClosedIcon {...props} />;
        },
      },
    ],
  },
};

export { config };


