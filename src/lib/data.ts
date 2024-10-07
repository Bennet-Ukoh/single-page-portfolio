import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import corpComment from "@/public/corp-comment.png";
import evento from "@/public/evento.png";
import petSoft from "@/public/pet-soft.png";
import quizzy from "@/public/quizzyapp.png";
import trek from "@/public/trek-bag.png";
import wordAnalytics from "@/public/word-analytics.png";

export const navSocials = [
  {
    icon: FaGithub,
    url: "https://github.com/Bennet-Ukoh",
  },
  {
    icon: SiFrontendmentor,
    url: "https://www.frontendmentor.io/profile/Bennet-Ukoh",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ukohbennet/",
  },
  {
    icon: FaTwitter,
    url: "https://x.com/ukoh_bennet",
  },
];

export const courses = [
  {
    name: "HTML",
    experience: "4 Years Experience",
  },
  {
    name: "CSS",
    experience: "4 Years Experience",
  },
  {
    name: "Javascript",
    experience: "3 Years Experience",
  },
  {
    name: "Next.js",
    experience: "2 Years Experience",
  },
  {
    name: "React",
    experience: "1 Year Experience",
  },
  {
    name: "Tailwind",
    experience: "1 Year Experience",
  },
];

export const projects = [
  {
    image: corpComment,
    name: "Corp Comment",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://github.com/Bennet-Ukoh/CorpComment",
    liveUrl: "https://corp-comments-six.vercel.app/",
  },
  {
    image: evento,
    name: "Evento",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://github.com/Bennet-Ukoh/evento",
    liveUrl: "https://eventsapp-cyan.vercel.app/",
  },
  {
    image: petSoft,
    name: "Pet Soft",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://github.com/Bennet-Ukoh/PetSoft",
    liveUrl: "https://petssoftware.vercel.app/",
  },
  {
    image: quizzy,
    name: "SmartShe",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://github.com/Bennet-Ukoh/smartSHE",
    liveUrl: "https://smart-she.vercel.app/",
  },
  {
    image: trek,
    name: "Trek",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://github.com/Bennet-Ukoh/Trek-Bag",
    liveUrl: "https://trek-bag-ten.vercel.app/",
  },
  {
    image: wordAnalytics,
    name: "Word Analytics",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://github.com/Bennet-Ukoh/Word-Analytics",
    liveUrl: "https://word-analytics-app-nine.vercel.app/",
  },
];
