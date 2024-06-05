import type { Metadata } from "next";

import { Body, Main, Header, HeaderLogo } from "@a01sa01to/ui";

import "@a01sa01to/ui/style.css";

import style from "./layout.module.css";

export const metadata: Metadata = {
  title: "Asa's Repository",
  description: "@a01sa01to's GitHub Repository",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <Body>
        <Header>
          <HeaderLogo>
            <img
              src="https://github.com/a01sa01to.png?size=64"
              alt="a01sa01to"
              className={style.prof}
            />
            @a01sa01to&apos;s Repository
          </HeaderLogo>
        </Header>
        <Main>{children}</Main>
      </Body>
    </html>
  );
}
