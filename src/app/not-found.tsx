"use client";

import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import NextLink from "next/link";

import { Heading, ButtonLink, configureAdapter } from "@a01sa01to/ui";

import style from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404 Not Found | Asa's Repository",
};

export default function NotFound() {
  configureAdapter("link", (props) => (
    <NextLink {...props} href={props.href ?? ""} />
  ));

  const pathname = usePathname();

  const fontsubset = encodeURIComponent(Array.from(new Set(pathname)).join(""));

  return (
    <>
      <link
        href={`https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400&display=swap&text=${fontsubset}`}
        rel="stylesheet"
      />
      <Heading size="h1">404 Not Found</Heading>
      <p>
        The Requested Page <code className={style.code}>{pathname}</code> is not
        found.
      </p>
      <nav className={style.nav}>
        <ButtonLink href="/" size="large" variant="primary">
          Go to Home
        </ButtonLink>
        <ButtonLink
          href="https://github.com/a01sa01to"
          size="large"
          variant="secondary"
        >
          Go to GitHub (@a01sa01to)
        </ButtonLink>
      </nav>
    </>
  );
}
