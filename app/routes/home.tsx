import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { Fragment } from 'react'
import { useLoaderData } from 'react-router'

import { Heading, Link, Table } from '@a01sa01to/ui/src'
import { load } from 'js-yaml'

import type { ReposList } from '../../data/repos.schema'
import styles from './home.module.css'

export const loader = async () => {
  const file = await readFile(
    resolve(import.meta.dirname, '..', '..', 'data', 'repos.yml'),
    'utf-8'
  )
  const data = load(file) as ReposList
  return data
}

const ReposLink = ({ name }: { name: string }) => (
  <Link href={`https://github.com/${name}`}>{name}</Link>
)

const PreviewLink = ({ url }: { url: string }) => <Link href={url}>{url}</Link>

const PrivateLabel = () => (
  <span className={[styles.label, styles.private].join(' ')}>Private</span>
)

const ArchivedLabel = () => (
  <span className={[styles.label, styles.archived].join(' ')}>Archived</span>
)

export default function Home() {
  const data = useLoaderData<typeof loader>()

  return (
    <>
      <title>Asa&apos;s Repositories</title>
      <meta name='description' content="@a01sa01to's GitHub Repositoies" />
      <Heading size='h1'>a01sa01to&apos;s Repositories List</Heading>
      <p>
        a01sa01to の GitHub リポジトリ一覧です。
        自分がかかわったプロジェクトも含まれています。
      </p>
      {data.map(section => (
        <Fragment key={section.title}>
          <Heading size='h2'>{section.title}</Heading>
          {section.items.map(subsection => (
            <Fragment key={subsection.title}>
              <Heading size='h3'>{subsection.title}</Heading>
              {subsection.description && <p>{subsection.description}</p>}
              <Table>
                <thead>
                  <tr>
                    <th>Repository</th>
                    <th>Description</th>
                    <th>Preview</th>
                  </tr>
                </thead>
                <tbody>
                  {subsection.items.map(item => (
                    <tr key={item.repo}>
                      <td>
                        <ReposLink name={item.repo} />
                        {item.private && <PrivateLabel />}
                        {item.archived && <ArchivedLabel />}
                      </td>
                      <td>{item.description}</td>
                      <td>{item.url && <PreviewLink url={item.url} />}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </>
  )
}
