import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { colors } from '../style'
import axios from 'axios'

class Page extends Document {
  static getInitialProps({ pathname, renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    // Analytics
    if (process.env.NODE_ENV !== 'development') {
      const path = pathname === '/' ? '/index' : pathname
      axios
        .get('https://lachlanjc-analytics.glitch.me' + path)
        .then(res => res.data)
        .then(json => console.log('Page views:', json.views))
        .catch(err => console.log('Something went wrong:', err))
    }
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {this.props.styleTags}
          <style>{`
            body {
              font-family: -apple-system, BlinkMacSystemFont, SegoeUI, Roboto, sans-serif;
              line-height: 1.5;
              margin: 0;
              color: ${colors.black}
            }
            a { text-decoration: none; }
          `}</style>
          {[16, 32].map(size => (
            <link
              rel="icon"
              type="image/png"
              href={`/static/favicon-${size}x${size}.png`}
              sizes={`${size}x${size}`}
              key={`icon-${size}x${size}`}
            />
          ))}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color={colors.base}
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="theme-color" content={colors.base} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Page
