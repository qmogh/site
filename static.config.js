import React, { Component } from 'react'
import Uglify from 'uglifyjs-webpack-plugin'
import { ServerStyleSheet } from 'styled-components'
import { colors } from './src/style'
import axios from 'axios'

const css = `
  body {
    font-family: -apple-system, BlinkMacSystemFont, SegoeUI, Roboto, sans-serif;
    line-height: 1.5;
    margin: 0;
    color: ${colors.black}
  }
  a { text-decoration: none; }
`

export default {
  getSiteProps: () => ({
    title: 'Lachlan Campbell'
  }),
  getRoutes: () => [
    {
      path: '/',
      component: 'src/pages/index'
    },
    {
      path: '/edu',
      component: 'src/pages/edu'
    }
    // {
    //   is404: true,
    //   component: 'src/pages/404'
    // }
  ],
  webpack: c => {
    c.plugins = c.plugins.filter(p => p.constructor.name !== 'UglifyJsPlugin')
    c.plugins.push(new Uglify())
    return c
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props
      // Analytics
      // if (process.env.NODE_ENV !== 'development') {
      //   const path = pathname === '/' ? '/index' : pathname
      //   axios
      //     .get('https://lachlanjc-analytics.glitch.me' + path)
      //     .then(res => res.data)
      //     .then(json => console.log('Page views:', json.views))
      //     .catch(err => console.log('Something went wrong:', err))
      // }
      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
            <style dangerouslySetInnerHTML={{ __html: css }} />
            {renderMeta.styleTags}
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
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
