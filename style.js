import { map } from 'lodash'

export const breakpoints = map(
  ['(min-width:40em)', '(min-width:52em)', '(min-width:64em)'],
  w => `@media screen and ${w}`
)

export const scale = [0, 8, 16, 32, 64]
export const typeScale = [64, 48, 32, 24, 16, 14, 12]

const blue = '#009EEB'
export const colors = {
  accent: '#7E5BEF',
  base: blue,
  blue,

  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  // smoke3: '#c0ccda',
  // smoke2: '#d3dce6',
  smoke: '#e0e6ed',
  // snow3: '#e5e9f2',
  // snow2: '#eff2f7',
  snow: '#f9fafc',
  white: '#ffffff'
}

export const borderRadius = 2
export const borderRadiusXl = borderRadius * 2
export const bold = 600
