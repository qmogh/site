import React from 'react'
import Head from 'next/head'
import { colors } from './style'
import {
  Flex,
  Box,
  Heading,
  Subhead,
  Text,
  Link,
  Lead,
  Image,
  BlockLink
} from 'rebass'
import { map, isEmpty, kebabCase, deburr, replace } from 'lodash'

export const mono = {
  fontFamily:
    "'SF Mono', Consolas, 'Liberation Mono', Menlo, Courier, monospace"
}

export const Meta = ({ title = '@lachlanjc', children }) => (
  <Head>
    <title children={title} />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
        line-height: 1.5;
        margin: 0;
        color: ${colors.black}
      }
      a { text-decoration: none; }
    `}</style>
    {map([16, 32], size => (
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
    {children}
  </Head>
)

export const Header = props => (
  <Box
    is="header"
    bg={colors.base}
    color={colors.white}
    px={2}
    py={4}
    mb={[3, 4]}
    center
    {...props}
  />
)

const Subheader = Flex.extend.attrs({
  align: 'center',
  justify: 'center',
  color: colors.steel
})`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .1em;
`

export const SectionHeading = ({ icon, children, ...props }) => (
  <Subheader {...props}>
    <Icon name={icon} fill={colors.grey} size={32} mr={1} />
    <Subhead my={0} f={3}>
      {children}
    </Subhead>
  </Subheader>
)

export const Float = Box.extend`
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
`
export const FloatLink = Float.withComponent(Link).extend`
 text-decoration: none;
 transition: .2s all ease-out;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
  }
`

export const ProjectGrid = Flex.extend.attrs({
  px: [2, 3],
  py: 1,
  direction: ['column', 'row'],
  justify: 'center',
  wrap: true
})`
`
const ProjectName = Subhead.extend`
  color: inherit;
`
const ProjectDescription = Text.extend`
  color: inherit;
  opacity: 0.8;
`

export const Project = ({ name, url, description, color = colors.white }) => (
  <FloatLink
    href={isEmpty(url) ? '#' : url.match(/^\//) ? url : `https://${url}`}
    target="_blank"
    id={kebabCase(deburr(name))}
    bg={color}
    style={{ color: colors.white }}
    w={[1, 1 / 3]}
    m={[0, 2]}
    mt={2}
    p={[2, 3]}
  >
    <ProjectName f={4} m={0}>
      {name}
    </ProjectName>
    <ProjectDescription f={[2, 3]} mt={1} mb={0}>
      {description}
    </ProjectDescription>
  </FloatLink>
)

export const Icon = ({
  name = 'x',
  fill = colors.white,
  size = 32,
  ...props
}) => (
  <Image
    alt={`${name} icon`}
    src={`https://icon.now.sh/${name}/${size}/${replace(fill, '#', '')}`}
    style={{ width: size, height: size }}
    {...props}
  />
)

export const Service = ({ href, icon, ...props }) => (
  <Link target="_blank" href={href} mx={1} {...props}>
    <Icon name={icon} fill={colors.blue} />
  </Link>
)

export const Footer = ({ file = 'index', ...props }) => (
  <Text center py={3}>
    <Link
      href={`https://github.com/lachlanjc/site/blob/glitch/pages/${file}.js`}
      f={5}
    >
      ⌨️
    </Link>
  </Text>
)

