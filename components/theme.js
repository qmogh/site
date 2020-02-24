import base from '@hackclub/theme'
import { merge } from 'lodash'

export const palette = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  fuschia: '#ff2467',
  pink: '#ff707a',
  lilac: '#849de1',
  yellow: '#ffaf26',
  light: '#ffeaeb',
  indigo: '#3b47a8',
  purple: '#8057c5',
  twitter: '#1da1f2',
  facebook: '#3b5998',
  instagram: '#e1306c'
}

const theme = merge(base, {
  colors: {
    ...palette,
    text: palette.light,
    background: palette.indigo,
    elevated: palette.light,
    elevatedText: palette.indigo,
    primary: palette.fuschia,
    secondary: palette.lilac,
    muted: palette.lilac,
    accent: palette.pink,
    modes: {
      dark: {
        text: palette.light,
        background: '#0c0b0a',
        elevated: palette.darkless,
        elevatedText: palette.light,
        primary: palette.fuschia,
        secondary: palette.pink,
        accent: palette.yellow,
        muted: palette.lilac
      }
    }
  },
  fonts: {
    display:
      'WhyteInktrap, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body:
      'Whyte, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 0.875
  },
  fontWeights: {
    light: 300,
    body: 400,
    medium: 500,
    bold: 700,
    heading: 900
  }
})

export default theme
