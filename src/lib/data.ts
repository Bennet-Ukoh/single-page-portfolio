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
    url: "https://github.com/Bennet-Ukoh",
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
    name: "Sass",
    experience: "1 Year Experience",
  },
];

export const projects = [
  {
    image: corpComment,
    name: "Corp Comment",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://bennet-ukoh.github.io/corp-comment/",
    liveUrl: "https://corp-comment.netlify.app/",
  },
  {
    image: evento,
    name: "Evento",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://bennet-ukoh.github.io/evento/",
    liveUrl: "https://evento.netlify.app/",
  },
  {
    image: petSoft,
    name: "Pet Soft",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://bennet-ukoh.github.io/pet-soft/",
    liveUrl: "https://pet-soft.netlify.app/",
  },
  {
    image: quizzy,
    name: "Quizzy",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://bennet-ukoh.github.io/quizzy/",
    liveUrl: "https://quizzy.netlify.app/",
  },
  {
    image: trek,
    name: "Trek",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://bennet-ukoh.github.io/trek/",
    liveUrl: "https://trek.netlify.app/",
  },
  {
    image: wordAnalytics,
    name: "Word Analytics",
    tools: ["HTML", "CSS", "Javascript"],
    gitUrl: "https://bennet-ukoh.github.io/word-analytics/",
    liveUrl: "https://word-analytics.netlify.app/",
  },
];
