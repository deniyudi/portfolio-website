import NextLink, { LinkProps as NextLinkProps } from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  className?: string;
  underline?: boolean;
  href: string;
} & NextLinkProps;

export default function Link(props: LinkProps) {
  const isExternal = !props.href.toString().startsWith("/");
  const { underline, ...rest } = props;
  const isDownloadable = props.href.toString().endsWith(".pdf");

  return (
    <NextLink
      {...rest}
      className={clsx(
        "underline-offset-4",
        (isExternal || underline) && "underline",
        props.className,
      )}
      target={isExternal ? "_blank" : undefined}
      download
    >
      {props.children}
    </NextLink>
  );
}
