"use client";
import Image, { StaticImageData } from "next/image";

import clsx from "clsx";

import Link from "@/components/ui/Link";

type Workplace = {
  title: string;
  company: string;
  imageSrc: string | StaticImageData;
  time?: string;
  link?: string;
};

function Workplace({ title, company, imageSrc, time, link }: Workplace) {
  

  const content = (
    <>

      <div className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={company}
          className="rounded-full w-12 h-12"
        />
        <div className="flex flex-col gap-px">
          <p className={link ? "external-arrow" : ""}>{title}</p>
          <div className="flex flex-col sm:flex-row"> 
            <p className="text-secondary">{company}</p>
            {time && <time className="text-secondary sm:text-right">{time}</time>} 
          </div>
        </div>
      </div>

    </>
  );
  return (
    <li className="transition-opacity" key={company}>
      {link ? (
        <Link
          href={link}
          className="flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline"
        >
          {content}
        </Link>
      ) : (
        <div className="flex justify-between">{content}</div>
      )}
    </li>
  );
}

export default function Workplaces({ items }: { items: Workplace[] }) {
  return (
    <ul className="flex flex-col gap-8 animated-list">
      {items.map(Workplace)}
    </ul>
  );
}
