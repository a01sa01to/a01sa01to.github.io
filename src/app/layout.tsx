import type { Metadata } from "next";

import { Body, MainContainer, Header, HeaderLogo } from "@a01sa01to/ui";

import "@a01sa01to/ui/style.css";

import subsetChars from "./subsetdata";

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
          href={`https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans:wght@400;500;700&display=swap&text=${encodeURIComponent(
            subsetChars
          )}`}
          rel="stylesheet"
        />
      </head>
      <Body>
        <Header>
          <HeaderLogo>
            <img
              src="https://github.com/a01sa01to.png?size=56"
              alt="a01sa01to"
              width="56"
              height="56"
              style={{ borderRadius: "50%" }}
            />
            @a01sa01to&apos;s Repository
          </HeaderLogo>
        </Header>
        <MainContainer>{children}</MainContainer>
      </Body>
    </html>
  );
}
