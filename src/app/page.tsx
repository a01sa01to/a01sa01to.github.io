import NextLink from "next/link";
import { Heading, configureAdapter, Link, Table } from "@a01sa01to/ui";

export default async function Home() {
  configureAdapter("link", (props) => (
    <NextLink {...props} href={props.href ?? ""} />
  ));

  const ReposLink = ({ name }: { name: string }) => (
    <Link href={`https://github.com/${name}`}>{name}</Link>
  );

  const PreviewLink = ({ url }: { url: string }) => (
    <Link href={url}>{url}</Link>
  );

  return (
    <>
      <Heading size="h1">a01sa01to&apos;s Repository List</Heading>
      <p>
        a01sa01to の GitHub リポジトリ一覧です。
        自分がかかわったプロジェクトも含まれています。
      </p>
      <Heading size="h2">Personal</Heading>
      <Heading size="h3">My Website</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/a01sa01to.github.io" />
            </td>
            <td>このサイト</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/a01sa01to.com" />
              (Private)
            </td>
            <td>今使っている Web サイト</td>
            <td>
              <PreviewLink url="https://a01sa01to.com/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/ui" />
            </td>
            <td>UI コンポーネントライブラリ</td>
            <td>
              <PreviewLink url="https://repos.a01sa01to.com/ui/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/admin.a01sa01to.com" />
              (Private)
            </td>
            <td>管理用 (というか自分用プライベートな) Web サイト</td>
            <td>
              <PreviewLink url="https://admin.a01sa01to.com/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/opendata-api" />
              (Private)
            </td>
            <td>a01sa01to.com のオープンデータ API の内部実装</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/cfw-tweetdata-fetcher" />
            </td>
            <td>
              Twitter API をプロキシするための Cloudflare Workers のコード
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/my-website" />
              (Archived)
            </td>
            <td>2022 年まで使っていた Web サイトを Public にしたもの</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/my-website-2" />
              (Archived)
            </td>
            <td>2022 年末まで使っていた Nuxt.js 2 製サイト</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">Utility</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/IMEChange" />
            </td>
            <td>IME をスタートアップ時に切り替えるソフト</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/StSapuri_Stylizer" />
              (Archived)
            </td>
            <td>スタディサプリの見た目を自分好みにする拡張機能</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/README-Maker" />
            </td>
            <td>
              README のテンプレートを作る。 (Repository Template を使いましょう)
            </td>
            <td>
              <PreviewLink url="https://repos.a01sa01to.com/README-Maker/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/TitleAndURL_Picker" />
            </td>
            <td>Markdown 向けにタイトルと URL を取得する拡張機能</td>
            <td>
              <PreviewLink url="https://chrome.google.com/webstore/detail/apegdmeimjlklboalimnaokfnnngajcg" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/autothread-discord-bot" />
            </td>
            <td>
              Discord で特定のチャンネルにメッセージを投稿すると自動で Thread
              を作成する bot
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/competitive-terminal" />
            </td>
            <td>
              競プロ用ターミナル。 C++ で開発していたがめんどくさくなったので
              PowerShell の関数として移植した。
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/cfw-ghnotifier" />
            </td>
            <td>
              GitHub の通知を定期的に Slack に通知するための Cloudflare Workers
              のコード
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">Game</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/NervousBreakdown" />
              (Archived)
            </td>
            <td>神経衰弱</td>
            <td>
              <PreviewLink url="https://repos.a01sa01to.com/NervousBreakdown/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/Code-AutoTyper" />
            </td>
            <td>キーボードを適当に打つだけでコードが入力される遊びサイト</td>
            <td>
              <PreviewLink url="https://repos.a01sa01to.com/Code-AutoTyper/" />
            </td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">Civic Tech</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/covid19-ibaraki" />
            </td>
            <td>茨城県版 新型コロナウイルス対策サイト</td>
            <td>
              <PreviewLink url="https://ibaraki.stopcovid19.jp/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/cov19-ibaraki-scraping" />
              (Archived)
            </td>
            <td>新型コロナ対策サイトのデータ更新用 旧スクレイパー</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">Sample</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/Grid-Centering" />
            </td>
            <td>Grid のみで中央ぞろえ</td>
            <td>
              <PreviewLink url="https://repos.a01sa01to.com/Grid-Centering/" />
            </td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">Backup</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/hackmd" />
            </td>
            <td>HackMD の記事たち (主にコロナ禍の知事記者会見まとめ)</td>
            <td>
              <PreviewLink url="https://hackmd.io/@a01sa01to" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/atcoder-archive" />
              (Private)
            </td>
            <td>AtCoder に提出したコード</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/aoj-archive" />
              (Private)
            </td>
            <td>Aizu Online Judge に提出したコード</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/codeforces-archive" />
              (Private)
            </td>
            <td>Codeforces に提出したコード</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/codingame-archive" />
              (Private)
            </td>
            <td>CodinGame に提出したコード</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/projecteuler-archive" />
              (Private)
            </td>
            <td>Project Euler を解くために使ったコード</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/ksnctf-archive" />
              (Private)
            </td>
            <td>ksnctf で使ったコードとか</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">AtCoder Heuristic Contest</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/AHC-Tester" />
            </td>
            <td>AHC のテストを GitHub Actions で一気に動かすテンプレート</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/marathon-template" />
            </td>
            <td>テンプレート</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/ahc-archive" />
            </td>
            <td>各 AHC の作業リポジトリを Git Submodules としてまとめたもの</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">ISUCON</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/isucon-practice-001" />
            </td>
            <td>ISUCON の練習</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">Web Speed Hackathon</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/web-speed-hackathon-2022-practice" />
            </td>
            <td>Web Speed Hackathon の練習</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/web-speed-hackathon-2023" />
            </td>
            <td>Web Speed Hackathon 2023</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/wsh-practice-2022" />
            </td>
            <td>Maximum 内の Web Speed Hackathon 練習用に使ったリポジトリ</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/web-speed-hackathon-2024" />
            </td>
            <td>Web Speed Hackathon 2024</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">Competitive Programming</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/cp-library" />
              (Private)
            </td>
            <td>
              競プロライブラリ。 Issue とかがごちゃごちゃしてるので Private
              にしているもののサイト自体は見れます
            </td>
            <td>
              <PreviewLink url="https://repos.a01sa01to.com/cp-library/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/cp-review" />
            </td>
            <td>競プロ復習ツール</td>
            <td>
              <PreviewLink url="https://repos.a01sa01to.com/cp-review/" />
            </td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">Miscellaneous</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/a01sa01to" />
            </td>
            <td>
              a01sa01to/a01sa01to is a special repository.
              <br />
              Its README.md will appear on your public profile.
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/skills-secure-code-game" />
            </td>
            <td>GitHub Skills の Secure Code Game</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/zenn" />
              (Private)
            </td>
            <td>
              Zenn のデータ。 (今のところ)
              論文読みのメモとしか使ってないので記事はないです。
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/config" />
            </td>
            <td>自分用の設定ファイルたち</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h2">Koga Secondary School</Heading>
      <Heading size="h3">My</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/2018CulFesAccounting" />
              (Archived)
            </td>
            <td>2018 年 文化祭 会計システム</td>
            <td>
              <PreviewLink url="https://repos.a01sa01to.com/2018CulFesAccounting/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/Seat-Change" />
              (Archived)
            </td>
            <td>席替えシステム</td>
            <td>
              <PreviewLink url="https://repos.a01sa01to.com/Seat-Change/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/kss-bakakkoii-website" />
              (Archived)
            </td>
            <td>「古河中等ばかっこいいシリーズ」の Web サイト</td>
            <td>
              <PreviewLink url="https://kss-bakakkoii.a01sa01to.com/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/KSS-New" />
              (Archived)
            </td>
            <td>
              古めかしい古河中等の Web
              サイトを勝手にリニューアルしてみたプロジェクト
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">KSS PC Club</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="kss-pc-club/kss-pc-club.github.io" />
            </td>
            <td>GitHub Pages</td>
            <td>
              <PreviewLink url="https://repos.kss-pc.club/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="kss-pc-club/SchoolFest2019" />
              (Archived)
            </td>
            <td>2019 年 文化祭 KSS PC Club ポータルサイト</td>
            <td>
              <PreviewLink url="https://repos.kss-pc.club/SchoolFest2019/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="kss-pc-club/KSS-Browser" />
              (Archived)
            </td>
            <td>
              文化祭展示用ブラウザ。いたずら防止のため全画面表示しかできない。使ってない。
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="kss-pc-club/websocket" />
              (Archived)
            </td>
            <td>
              WebSocket サーバ。
              何かしらのアプリで使えると思ったが結局使わずじまい。
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="kss-pc-club/shortener" />
              (Private)
            </td>
            <td>
              URL 短縮サービス。 ルーティング設定を Firebase
              の設定ファイルに埋め込んでいるだけ。
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="kss-pc-club/firststep" />
            </td>
            <td>
              KSS PC Club に参加したら最初にやることまとめ。
              たぶん使ってなさそう
            </td>
            <td>
              <PreviewLink url="https://firststep.kss-pc.club/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="kss-pc-club/typing" />
            </td>
            <td>
              KSS PC Club 向けのタイピング練習。
              プログラミング用語が多めに出てくる。
            </td>
            <td>
              <PreviewLink url="https://typing.kss-pc.club/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="kss-pc-club/KSS-Fes-Admin" />
              (Archived)
            </td>
            <td>
              文化祭の各模擬店用の管理画面。
              現在では新しいシステムが使われているっぽい。
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="kss-pc-club/Fes-Monitor" />
              (Archived)
            </td>
            <td>
              文化祭で各模擬店用の待ち時間を表示するモニター。
              現在では新しいシステムが使われているっぽい。
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="kss-pc-club/kss-pay" />
              (Archived)
            </td>
            <td>
              文化祭で使える電子マネー「KSS Pay」。 コロナで中止になってしまった
              (+ いろいろ問題がありそう) ので使わずに終わった。
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h2">Saitama University</Heading>
      <Heading size="h3">Utility</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/WebClass-PreventDL" />
            </td>
            <td>
              WebClass
              に提出したレポートをダウンロードせずに閲覧できるようにする拡張機能
            </td>
            <td>
              <PreviewLink url="https://chrome.google.com/webstore/detail/jnfpcbofkkehicfggjmhgaabheodhhpe/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/SaitamaUniv-WakameNavi" />
            </td>
            <td>
              埼玉大学周辺を走るバスの運行情報を確認できるサイト「わかめナビ」の
              Fork。 PR を投げた。
            </td>
            <td>
              <PreviewLink url="https://wakame-navi.vercel.app/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/vscode-vtm-syntax" />
            </td>
            <td>
              「計算論」で使ったバーチャルチューリングマシンの VSCode Syntax
            </td>
            <td>
              <PreviewLink url="https://marketplace.visualstudio.com/items?itemName=a01sa01to.vtm-syntax" />
            </td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">Homeworks</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/univ-colab" />
            </td>
            <td>講義で使った Jupyter Notebook たち</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/java-calculator" />
            </td>
            <td>
              「オブジェクト指向言語」の課題。 Java + JavaFX で作った電卓。
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/c-chat" />
            </td>
            <td>
              「プログラミング演習 3」の課題。 C
              言語のソケット通信を使ったチャット。
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/opengl-minesweeper" />
            </td>
            <td>
              「プログラミング演習 3」の課題。 OpenGL を使ったマインスイーパー。
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/software-engineering-2023" />
            </td>
            <td>「ソフトウェア工学」の作業リポジトリ。</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="a01sa01to/univ-compiler" />
            </td>
            <td>「コンパイラ」の課題</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Heading size="h3">Maximum</Heading>
      <Table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>Description</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ReposLink name="a01sa01to/Maximum-Problems-2022" />
              (Archived)
            </td>
            <td>内部用 DOMJudge を使っていた時に適当に作った問題</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="saitamau-maximum/Maximum2022" />
              (Archived)
            </td>
            <td>Maximum 2022 の講習会のサンプルコード</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <ReposLink name="saitamau-maximum/icpc-prelim-system" />
            </td>
            <td>ICPC 国内予選のシステムを練習用に作った</td>
            <td>
              <PreviewLink url="https://saitamau-maximum.github.io/icpc-prelim-system/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="saitamau-maximum/algori-2023" />
              (Archived)
            </td>
            <td>NTT 東日本が開催する大会「ALGORI」に提出したコード</td>
            <td>
              <PreviewLink url="https://saitamau-maximum.github.io/icpc-prelim-system/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="saitamau-maximum/auth" />
            </td>
            <td>Maximum の統一認証システム</td>
            <td>
              <PreviewLink url="https://auth.maximum.vc/" />
            </td>
          </tr>
          <tr>
            <td>
              <ReposLink name="saitamau-maximum/members" />
            </td>
            <td>Maximum の会員情報を一元管理するためのリポジトリ</td>
            <td></td>
          </tr>
          <tr>
            <td>... + Many Private Repositories</td>
            <td>ここには載せられない Private なリポジトリがたくさん</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
