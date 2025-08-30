import { ButtonLink, Heading } from '@a01sa01to/ui/src'
import { useLocation } from 'react-router'

import style from '../not-found.module.css'

export default function NotFound() {
  const { pathname } = useLocation()

  return (
    <>
      <title>404 Not Found | Asa&apos;s Repository</title>
      <Heading size='h1'>404 Not Found</Heading>
      <p>
        The Requested Page <code className={style.code}>{pathname}</code> is not
        found.
      </p>
      <nav className={style.nav}>
        <ButtonLink href='/' size='large' variant='solid-fill'>
          Go to Home
        </ButtonLink>
        <ButtonLink
          href='https://github.com/a01sa01to'
          size='large'
          variant='outline'
        >
          Go to GitHub (@a01sa01to)
        </ButtonLink>
      </nav>
    </>
  )
}
