"use client";

import type { Project as PostType } from ".contentlayer/generated";
import PostProjectView from "./PostProjectView";
import React, { useRef, useState } from "react";

function getRelativeCoordinates(
  event: React.MouseEvent<HTMLUListElement>,
  referenceElement: any
) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.clientTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
  };
}

type PostProjectProps = {
  posts: PostType[];
};

export default function PostProject({ posts }: PostProjectProps) {
  const [mousePosition, setMousePosition] = useState({
    x: 240,
    y: 0,
  });
  const listRef = useRef(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    setMousePosition(getRelativeCoordinates(e, listRef.current));
  };

  return (
    <ul
      ref={listRef}
      onMouseMove={(e) => handleMouseMove(e)}
      className="flex flex-col animated-list"
    >
      {posts.length  === 0 && <p>No posts found</p>}
      {posts.map((post) => (
        <PostProjectView key={post.slug} postProject={post} mousePosition={mousePosition} />
      ))}
    </ul>
  );
}