import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const content = readFileSync(
  resolve(import.meta.dirname, '..', 'data', 'repos.yml'),
  'utf8'
)

let newContent = content

// home.tsx
newContent += "Asa's Repositories"
newContent += "a01sa01to's Repositories List"
newContent +=
  'a01sa01to の GitHub リポジトリ一覧です。自分がかかわったプロジェクトも含まれています。'
newContent += 'Repository Description Preview'

// root.tsx
newContent += "@a01sa01to's Repository"

// not-found.tsx
newContent +=
  '404 Not Found The Requested Page is not found. Go to Home Go to GitHub (@a01sa01to)'

// ソート
newContent = newContent.replace(/\s+/gu, ' ').trim()
newContent = newContent.split('').sort().join('')

// 重複削除
const st = new Set(newContent.split(''))
newContent = Array.from(st).join('')

writeFileSync(
  resolve(import.meta.dirname, '..', 'app', 'subsetdata.ts'),
  `export default "${newContent}"`
)
