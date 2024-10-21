import {
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaDiscord,
  FaWhatsapp,
  FaFileAlt,
} from "react-icons/fa";

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  {
    label: "Email (General)",
    href: "mailto:deniyudisaputra@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/6281359131564?text=Hello%20Deni%2C%20nice%20to%20meet%20you%21%20I%20hope%20you're%20doing%20well%20today.%20Looking%20forward%20to%20chatting%20with%20you%21%20
`,
    icon: <FaWhatsapp />,
  },
  {
    label: "GitHub",
    href: "https://github.com/deniyudi",
    icon: <FaGithub />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/deniyudii/",
    icon: <FaInstagram />,
  },
  {
    label: "Telegram",
    href: "https://t.me/deniyudi/",
    icon: <FaTelegram />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/deniyudisaputra/",
    icon: <FaLinkedin />,
  },
  {
    label: "Resume",
    href: "/public/resume/CV Deni Yudi Saputra.pdf",
    icon: <FaFileAlt />,
  },
];

export default ConnectLinks;
