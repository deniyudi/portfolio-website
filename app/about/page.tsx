import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";

import qualitaLogo from "public/work/qualitaindonesia.jpg";
import dppLogo from "public/work/dpp.png";
import utsLogo from "public/work/utschool.jpg";
import ubigLogo from "public/work/ubig.jpg";
import wbsLogo from "public/work/wbs.jpg";

import deni1 from "public/gallery/deni1.jpg";
import deni2 from "public/gallery/deni2.jpg";

export const metadata: Metadata = {
  title: "About | Deni Yudi Saputra",
  description:
    "I am a Full-Stack Developer who basically just enjoys creating things.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={deni1}
            alt={"deni"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={deni2}
            alt={"image"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              Hi, i&apos;m Deni Yudi Saputra, a Software Engineer passionate
              about learning new skills, focusing on technical development,
              creativity, and personal growth. I thrive on continuously
              developing myself, embracing new challenges, and exploring
              innovative solutions in both technical and creative fields.
            </p>
            <p>
              You can chat with me at{" "}
              <Link
                className="underline"
                href="https://www.instagram.com/deniyudii/"
              >
                Instagram.
              </Link>{" "}
            </p>
            <p>
              When I&apos;m not at work, I&apos;m most likely working on
              development or improving this site :)
            </p>
          </div>
        </Section>

        <Section heading="Work Experience" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I started my career with courses at the United Tractors School
              Programming, and then I joined the company Qualita Indonesia.
              Where I still work today.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Software Developer",
    company: "PT Qualita Indonesia",
    time: "Aug 2024 - Now",
    imageSrc: qualitaLogo,
    link: "https://qualita-indonesia.com/",
  },
  {
    title: "Bootcamp Software Developer",
    company: "PT Qualita Indonesia",
    time: "May 2024 - Aug 2024",
    imageSrc: qualitaLogo,
    link: "https://qualita-indonesia.com/",
  },
  {
    title: "Internship Information Technology Programmer",
    company: "PT Dian Pandu Pratama",
    time: "Sep 2023 - Jan 2024",
    imageSrc: dppLogo,
    link: "https://dpp.co.id/",
  },
  {
    title: "Information Technology School Programmer",
    company: "United Tractors School",
    time: "Jun 2023 - Jan 2024",
    imageSrc: utsLogo,
    link: "https://www.utschool.sch.id/",
  },
  {
    title: "Administration Staff",
    company: "PT Karya Citra Mitra Sejati",
    time: "Aug 2021 - Jun 2023",
    imageSrc: wbsLogo,
  },
  {
    title: "Internship Mobile Developer",
    company: "PT Universal Big Data",
    time: "Apr 2020 - Oct 2020",
    imageSrc: ubigLogo,
    link: "https://ubig.co.id/",
  },
];
