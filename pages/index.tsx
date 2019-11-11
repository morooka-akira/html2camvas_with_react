import React from 'react'

import Head from 'next/head'
import { Options } from 'html2canvas'

const isServer = typeof window === 'undefined'
// NOTE: html2canvas() 内でwindowを参照しているらしく、SSRのときにエラーになってしまう。そのためClientのときだけ参照するようにする
const html2canvas: (element: HTMLElement, options?: Partial<Options>) => Promise<HTMLCanvasElement> = isServer
  ? undefined
  : require('html2canvas')

async function createCanvasImage(element: HTMLDivElement): Promise<string> {
  const canvas = await html2canvas(element)
  return canvas.toDataURL()
}

type Props = {}
type State = {
  imageUrl?: string
}

class Home extends React.Component<Props, State> {
  private content: HTMLDivElement

  public constructor(props: Readonly<Props>) {
    super(props)
    this.state = {
      imageUrl: undefined,
    }
  }

  public render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="continer">
          <div className="content" ref={r => (this.content = r)}>
            <h1 className="title">Welcome to Next.js!</h1>
          </div>
          <button onClick={this.clickCreateImage}>画像作成</button>
          {this.state.imageUrl && (
            <div>
              <img src={this.state.imageUrl} />
              <a href={this.state.imageUrl} download="image.png">
                ダウンロード
              </a>
            </div>
          )}
        </div>

        <style jsx>{`
          .continer {
            width: 100%;
            color: #333;
          }
          .content {
            width: 400px;
            background-color: red;
          }
        `}</style>
      </div>
    )
  }

  private clickCreateImage = async () => {
    const res = await createCanvasImage(this.content)
    this.setState({ imageUrl: res })
  }
}

export default Home
