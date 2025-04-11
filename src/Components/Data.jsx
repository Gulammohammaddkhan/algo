import { RiListCheck3 } from "react-icons/ri";
import { GiVideoCamera } from "react-icons/gi";
import { SiMoleculer } from "react-icons/si";
import { FaListCheck } from "react-icons/fa6";
import { GiLaptop } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { BsPcDisplay } from "react-icons/bs";
import { PiCertificateLight } from "react-icons/pi";
import img1 from "../assets/Images/Amazon.png";

export const aboutData = [
  {
    key: 1,
    logo: <RiListCheck3 className="w-[70px] h-[70px]" />,
    heading: "200 Hand-Picked Questions",
    disc: "Coding interview prep is a numbers game that many candidates lose. We've hand-picked 200  of the best coding interview questions to prepare you for every interview you could encounter.",
    link: {
      title: "Learn more.",
    },
  },
  {
    key: 2,
    logo: <GiVideoCamera className="w-[70px] h-[70px]" />,
    heading: "100+ Hours Of Video Explanations",
    disc: "Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video explanation to maximize learning. That's over 100 hours of content, all at your fingertips.",
    link: {
      title: "Learn more.",
    },
  },
  {
    key: 3,
    logo: <SiMoleculer className="w-[70px] h-[70px]" />,
    heading: "Data Structures Crash Course",
    disc: "Data structures are the pillars of coding interviews. Our video series gives you the foundational knowledge you need to be well-versed in all of the popular data structures.",
    link: {
      title: "Learn more.",
    },
  },
  {
    key: 4,
    logo: <FaListCheck className="w-[70px] h-[70px]" />,
    heading: "Solutions In 9 Languages",
    disc: "Not everyone speaks the same programming language. All of our solutions come in 9 different languages:JavaScript, TypeScript, Python, Swift, Kotlin, C++, Java, C#, and Go.",
    link: {
      title: "Learn more.",
    },
  },
  {
    key: 5,
    logo: <GiLaptop className="w-[70px] h-[70px]" />,
    heading: "Feature-Rich Coding Workspace",
    disc: "Coding out solutions to algorithm problems is the best way to practice. Our coding workspace lets you type out your answers and run them against our test cases, right here on the website.",
    link: {
      title: "Learn more.",
    },
  },
  {
    key: 6,
    logo: <FaReact className="w-[70px] h-[70px]" />,
    heading: "Space-Time Complexity Analyses",
    disc: "Understanding how much memory an algorithm uses and how fast it runs is crucial to passing coding interviews. All of our explanations include a rigorous space-time complexity analysis.",
    link: {
      title: "Learn more.",
    },
  },
  {
    key: 7,
    logo: <GiNotebook className="w-[70px] h-[70px]" />,
    heading: "4 Curated Assessments",
    disc: "Real coding interviews are timed and have multiple questions. We've curated 4  assessments to reflect a real day of coding interviews, filled with variety and appropriate difficulty.",
    link: {
      title: "Learn more.",
    },
  },
  {
    key: 8,
    logo: <BsPcDisplay className="w-[70px] h-[70px]" />,
    heading: "Mock Coding Interviews",
    disc: "Nothing compares to doing a real coding interview with a real human being. We let you do mock coding interviews with other users on a shared workspace, right here on AlgoExpert.",
    link: {
      title: "Learn more.",
    },
  },
  {
    key: 9,
    logo: <PiCertificateLight className="w-[70px] h-[70px]" />,
    heading: "Recruiting Profile & Certificate",
    disc: "Landing technical interviews can be harder than passing them. Once you earn the AlgoExpert Certificate, we refer you to tech companies so you can directly start their interview process.",
    link: {
      title: "Learn more.",
    },
  },
];

export const company = [
  {
    id: 1,
    img: "",
  },
  {
    id: 2,
    img: "https://assets.algoexpert.io/spas/main/prod/g627585ec77-prod/dist/images/3cd767dea94a85078ca4.png",
  },
];
