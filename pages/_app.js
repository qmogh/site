import React from 'react'
import Head from 'next/head'
import App from 'next/app'
import { ThemeProvider, ColorMode } from 'theme-ui'
import { Global } from '@emotion/core'
import Layout from '../components/layout'
import theme from '../components/theme'

const name = 'Lachlan Campbell – @lachlanjc'
const desc = 'I’m an 18-year-old designer-developer based in NYC.'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>{name}</title>
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="@lachlanjc" />
          <meta property="twitter:description" content={desc} />
          <meta property="og:title" content={name} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lachlanjc.me/" />
          <meta property="description" content={desc} />
          <script key="heap" type="text/javascript">{`window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};heap.load("2803421074");`}</script>
        </Head>
        <ThemeProvider theme={theme}>
          <ColorMode />
          <Global
            styles={theme => ({
              body: {
                fontFamily: theme.fonts.body,
                lineHeight: theme.lineHeights.body,
                fontWeight: theme.fontWeights.body,
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
                margin: 0,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                '*': {
                  boxSizing: 'border-box'
                },
                img: {
                  maxWidth: '100%'
                }
              }
            })}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    )
  }
}
