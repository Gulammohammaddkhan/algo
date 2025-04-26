import { RiListCheck3 } from "react-icons/ri";
import { GiVideoCamera } from "react-icons/gi";
import { SiMoleculer } from "react-icons/si";
import { FaListCheck } from "react-icons/fa6";
import { GiLaptop } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { BsPcDisplay } from "react-icons/bs";
import { PiCertificateLight } from "react-icons/pi";
import img1 from "../assets/Images/Img1.jpg";
import img2 from "../assets/Images/Img2.jpg";
import img3 from "../assets/Images/Img3.jpg";
import img4 from "../assets/Images/Img4.jpg";
import img5 from "../assets/Images/Img5.jpg";
import img6 from "../assets/Images/Img6.jpg";
import img7 from "../assets/Images/Img7.jpg";
import img8 from "../assets/Images/Img8.jpg";
import img9 from "../assets/Images/Img9.jpg";
import img10 from "../assets/Images/Img10.jpg";
import img11 from "../assets/Images/Img11.jpg";
import img12 from "../assets/Images/Img12.jpg";
import img13 from "../assets/Images/Img13.jpg";
import img14 from "../assets/Images/Img14.jpg";
import img15 from "../assets/Images/Img15.svg";
import google from "../assets/Images/Google.png";
import amazon from "../assets/Images/Amazon.png";
import microsoft from "../assets/Images/Microsoft.png";
import palantir from "../assets/Images/Palantir.png";
import oracle from "../assets/Images/Oracle.png";
import bloomberg from "../assets/Images/Bloomberg.png";
import capitalone from "../assets/Images/CapitalOne.png";
import harvard from "../assets/Images/Harvard.png";
import zillow from "../assets/Images/Zillow.png";
import blackrock from "../assets/Images/BlackRock.png";
import simon from "../assets/Images/Simon.png";
import ethereum from "../assets/Images/Ethereum.svg";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

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
export const reviewData = [
  {
    key: 1,
    avatar: img1,
    name: "Alex",
    title: "Software Engineer",
    company: google,
    disc: "AlgoExpert was the backbone of my technical coding interview preparation. It allows you to efficiently work through the most common variations of problems asked by top-tier companies without having to spend hours 'battling' an algorithm only to come up with an inefficient or incorrect solution. There are a lot of resources available for repetition, but AlgoExpert differentiates its product by providing the 'how' and 'why' in clear and concise videos. Developing a deeper understanding of how to approach these problems is better than trying to memorize lines of code. I highly recommend AlgoExpert.",
  },
  {
    key: 2,
    avatar: img2,
    name: "Corbin",
    title: "Software Engineer",
    company: amazon,
    disc: "As a scientist who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that AlgoExpert is one of the best resources out there for interview preparation, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think that the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I cannot recommend AlgoExpert highly enough.",
  },
  {
    key: 3,
    avatar: img3,
    name: "Carlos",
    title: "Software Developer Intern",
    company: microsoft,
    disc: "I'm just writing to thank you for this product. I had failed in so many interviews before, but I wanted to get into a top tech company so much that I even enrolled in a Master's program. Even then, I was unsure if I had what it takes to make it. From the moment I heard your first video explanation, I thought 'this is exactly the way to solve an interview question' (plus the extra points you can grab by asking clarifying questions). After a few months of studying, mainly on AlgoExpert, I got offers to intern at Microsoft and Google!",
  },
  {
    key: 4,
    avatar: img4,
    name: "Marlies",
    title: "Software Engineer",
    company: palantir,
    disc: "I just accepted an offer with Palantir, and also received an offer from Amazon and a handful of startups. AlgoExpert does a great job selecting problems- many of my interview questions were variants of problems on the website. And when I came across problems I hadn't seen before, AlgoExpert gave me the tools to select the right data structures and identify patterns. Thanks AlgoExpert!",
  },
  {
    key: 5,
    avatar: img5,
    name: "Adarsh",
    title: "Software Engineer",
    company: oracle,
    disc: "I just got a job offer from Oracle and most of the questions they asked, I had practiced on AlgoExpert. Even when they asked questions I was not familiar with, I was able to break down the problem and write code which I learned from the explanations section on AlgoExpert. Being a Computer Science Engineering student, I had fundamental knowledge in Data Structures & Algorithms, but I didn't know how to approach, break down and apply this knowledge to solve problems. Also since all the problems are classified into categories, I was able to easily identify my weak points and work on those. Extremely grateful to AlgoExpert !",
  },
  {
    key: 6,
    avatar: img6,
    name: "Elana",
    title: " Senior Software Engineer",
    company: bloomberg,
    disc: "The video explanations and detailed code examples on AlgoExpert have changed the way I approach coding problems. It has been an incredible asset during my career journey and I highly recommend it to anyone preparing for the job market.",
  },
  {
    key: 7,
    avatar: img7,
    name: "Alberto",
    title: "Software Engineer",
    company: capitalone,
    disc: "I've done Udemy, Udacity, Interview Cake, Educative, Egghead, Pluralsight, MIT OpenCourseWare, LeetCode, CodeSignal and various Youtube courses but this stuff that you all are putting out is among the best. Great work!",
  },
  {
    key: 8,
    avatar: img8,
    name: "Onyeka",
    title: "Web Developer",
    company: harvard,
    disc: "You can choose to spend your time scouring the internet for resources, or you can invest your money wisely and get as good a resource as you'll need. AlgoExpert is a big league product, with a high quality selection of algorithms and expert explanations. This is the best place to sharpen your problem solving skills on all the best material.",
  },
  {
    key: 9,
    avatar: img9,
    name: "Ayoub",
    title: "Software Engineer Intern",
    company: zillow,
    disc: "Hey, just wanted to thank you for AlgoExpert! I signed up a few months back and I went through 60% of the problems. Before AlgoExpert I was awful at solving anything harder than a LeetCode easy, now I can do LeetCode mediums without much effort and tackle LeetCode hards in a reasonable time frame! I don’t think I would have gotten an internship without AlgoExpert, so thank you!",
  },
  {
    key: 10,
    avatar: img10,
    name: "Sreepriya",
    title: "Software Engineer",
    company: microsoft,
    disc: "According to me landing on a dream job requires strong determination and continuous practice. But the most important thing is to find the right resource for the practice and I found AlgoExpert. Algoexpert provided me a platform to improve my thought process towards an algorithm question. It really helped me to shape my thinking skills and coding skills. I would definitely recommend to all the aspiring software engineers.",
  },
  {
    key: 11,
    avatar: img11,
    name: "Erik",
    title: "Software Engineer",
    company: blackrock,
    disc: "There are thousands of practice problems out there, but AlgoExpert provides curation, in-depth explanation, code testing, and support for multiple programming languages. A lot of the problems even have multiple solutions. I'm very glad I invested in it, and even though I've already been hired, I'm still using it to keep my skills up.",
  },
  {
    key: 12,
    avatar: img12,
    name: "Eren",
    title: "Data Engineer",
    company: simon,
    disc: "AlgoExpert was the best resource I used during my coding interview prep. Its structure, hand-picked questions, and detailed explanation videos really set it apart from other resources I tried. It helped me go into my interviews with confidence, allowing me to do well not only with small startups but also with big tech companies.",
  },
  {
    key: 13,
    avatar: img13,
    name: "Mitch",
    title: "Software Engineer",
    company: ethereum,
    disc: "I've tried a few of the algorithm learning resources and I think AlgoExpert is the best (and no I'm not being paid for this post). The site is super polished and offers a nice breadth of problems to get you best prepared with great solutions and video explanations. If you're on the job hunt, I think pairing AlgoExpert with an interviewing resource like Pramp and/or Interviewing.io is a great strategy.",
  },
  {
    key: 14,
    avatar: img14,
    name: "Jeremy",
    title: "Analyst",
    company: blackrock,
    disc: "AlgoExpert helped me be confident in my interviews. Their curated list of questions and Clement's thorough review videos ensured that I was ready for anything thrown at me in onsite interviews. I highly recommend AlgoExpert to anyone looking to secure a tech job, or just brush up on their algorithm skills.",
  },
  {
    key: 15,
    avatar: img15,
    name: "You",
    title: "Dream Job",
    disc: "Got an AlgoExpert success story to share?Tell us  where you work, what your position is, how helpful AlgoExpert was in getting it, and give us a link to your LinkedIn profile!",
  },
];

export const questionData = [
  {
    index: 1,
    icon: <IoCheckmarkCircleSharp />,
    text: "Arrays",
  },
  {
    index: 2,
    icon: <IoCheckmarkCircleSharp />,
    text: "Graphs",
  },
  {
    index: 3,
    icon: <IoCheckmarkCircleSharp />,
    text: "Ties",
  },
  {
    index: 4,
    icon: <IoCheckmarkCircleSharp />,
    text: "Linked Lists",
  },
  {
    index: 5,
    icon: <IoCheckmarkCircleSharp />,
    text: "Binary Trees",
  },
  {
    index: 6,
    icon: <IoCheckmarkCircleSharp />,
    text: "Strings",
  },
  {
    index: 7,
    icon: <IoCheckmarkCircleSharp />,
    text: "Dynamic Programming",
  },
  {
    index: 8,
    icon: <IoCheckmarkCircleSharp />,
    text: "Searching",
  },
  {
    index: 9,
    icon: <IoCheckmarkCircleSharp />,
    text: "Sorting",
  },
  {
    index: 10,
    icon: <IoCheckmarkCircleSharp />,
    text: "Greedy Algorithms",
  },
  {
    index: 11,
    icon: <IoCheckmarkCircleSharp />,
    text: "Recursion",
  },
  {
    index: 12,
    icon: <IoCheckmarkCircleSharp />,
    text: "Famous Algorithms",
  },
  {
    index: 13,
    icon: <IoCheckmarkCircleSharp />,
    text: "Heaps",
  },
  {
    index: 14,
    icon: <IoCheckmarkCircleSharp />,
    text: "Binary Search  Trees",
  },
  {
    index: 15,
    icon: <IoCheckmarkCircleSharp />,
    text: "Stacks",
  },
];
