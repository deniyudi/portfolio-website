import {
  SiAxios,
  SiCss3,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
    SiVuedotjs,
    SiLaravel,
    SiGo,
    SiMysql,
    SiPostgresql,
    SiDocker,
  SiGitlab
} from "react-icons/si";

type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = "25";

export const STACKS: stacksProps = {
    JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
    GitLab: <SiGitlab size={iconSize} className="text-orange-400" />,
    MySql: <SiMysql size={iconSize} className="text-blue-400" />,
    Postgres: <SiPostgresql size={iconSize} className="text-blue-400" />,
    PHP: <SiPhp size={iconSize} className="text-blue-500" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  Laravel: <SiLaravel size={iconSize} className="text-red-400" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Docker: <SiDocker size={iconSize} className="text-cyan-300" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  Github: <SiGithub size={iconSize} />,
  "React.js": <SiReact size={iconSize} className="text-sky-500" />,
  Go: <SiGo size={iconSize} className="text-blue-400" />,
  "Vue.js": <SiVuedotjs size={iconSize} className="text-green-500" />,
  Axios: <SiAxios size={iconSize} className="text-indigo-600" />,
  "Nuxt.js": <SiNuxtdotjs size={iconSize} className="text-green-600" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
//   "Framer Motion": <SiFramer size={iconSize} />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  "Node JS": <SiNodedotjs size={iconSize} className="text-green-600" />,
//   Flutter: <SiFlutter size={iconSize} className="text-blue-400" />,
};
