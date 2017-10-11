import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
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
          {this.props.styleTags}
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