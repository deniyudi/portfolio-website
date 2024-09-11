import Image from "next/image";
import { allBlogs, allProjects } from ".contentlayer/generated";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

import Link from "@/components/ui/Link";
import Me from "@/public/avatar.png";
import Avatar from "@/app/components/ui/Avatar";
import PostProject from "./blog/components/PostProject";
import PostBlog from "@/app/blog/components/PostBlog";

export default function Home() {
  const blogs = allBlogs
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    // 3 most recent
    .filter((_, i) => i < 3);
  
  const projects = allProjects
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    // 3 most recent
    .filter((_, i) => i < 3);

    return (
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex animate-in flex-col gap-8">
          <div
            className="animate-in space-y-4"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
              hey, Deni here!
            </h1>
            <p
            className="max-w-lg animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
            >
              I am a QA Engineer who test for the web, mobile with a oriented approach. 
              In addition to testing I also enjoy automation-testing, where I focus on personal development.
            </p>
          </div>
          <div
            className="flex animate-in gap-3 text-sm"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            {/* <Link
              className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
              href="/links"
            >
              Links
              <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
            </Link>
            <Link
            href="https://discord.gg/EdY5fMzu"
            className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
          >
            Discord
            <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
          </Link> */}
            <Link
              href="https://www.instagram.com/deniyudii/"
              className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            >
              IG
              <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
            </Link>
            <Link
              className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
              href="https://t.me/deniyudi"
            >
              Telegram
              <ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
            </Link>
          </div>
        </div>
  
        <div
          className="flex animate-in flex-col gap-8"
          style={{ "--index": 4 } as React.CSSProperties}
        >
          <div className="space-y-4">
            <Link
              className="group flex items-center gap-2 tracking-tight text-secondary"
              href="/projects"
            >
              Latest Projects
              <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
            </Link>
            <p className="max-w-lg text-tertiary">
              I occasionally write about programming, productivity, and more.
              Check me out and subscribe to stay up to date.
            </p>
          </div>
          <PostProject posts={projects} />
        </div>
        <div
          className="flex animate-in flex-col gap-8"
          style={{ "--index": 4 } as React.CSSProperties}
        >
          <div className="space-y-4">
            <Link
              className="group flex items-center gap-2 tracking-tight text-secondary"
              href="/blog"
            >
              Latest Blogs
              <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
            </Link>
            <p className="max-w-lg text-tertiary">
              I occasionally write about programming, productivity, and more.
              Check me out and subscribe to stay up to date.
            </p>
          </div>
          <PostBlog posts={blogs} />
        </div>
      </div>
    );
  }