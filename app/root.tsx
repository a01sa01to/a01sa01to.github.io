import type { ReactNode } from 'react'

import {
  Body,
  Header,
  HeaderLogo,
  MainContainer,
  configureAdapter,
} from '@a01sa01to/ui/src'
import {
  Links,
  Meta,
  Outlet,
  Link as RouterLink,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import './global.scss'
import subsetChars from './subsetdata'

export function Layout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  configureAdapter('link', props => (
    <RouterLink {...props} to={props.href ?? ''} />
  ))

  return (
    <html lang='ja'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:wght@400;700&display=swap&text=${encodeURIComponent(
            subsetChars
          )}`}
          rel='stylesheet'
        />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <Body>
        <Header>
          <HeaderLogo>
            <img
              src='https://github.com/a01sa01to.png?size=56'
              alt='a01sa01to'
              width='56'
              height='56'
              style={{ borderRadius: '50%' }}
            />
            @a01sa01to&apos;s Repository
          </HeaderLogo>
        </Header>
        <MainContainer>{children}</MainContainer>
        <ScrollRestoration />
        <Scripts />
      </Body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
