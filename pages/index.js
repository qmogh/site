import React from 'react'
import {
  Flex,
  Box,
  Heading,
  Subhead,
  Text,
  Lead,
  Avatar,
  Link,
  BlockLink,
  Image
} from 'rebass'
import { fontSize, responsiveStyle } from 'styled-system'
import { map, merge, lowerCase, kebabCase } from 'lodash'
import { colors } from '../style'
import {
  Meta,
  SectionHeading,
  Float,
  FloatLink,
  ProjectGrid,
  Project,
  Icon,
  Service,
  Footer
} from '../components'
import { main, oss, prev } from '../data'

const sections = [
  ['Projects', 'layers', main],
  ['Open Source', 'open_in_browser', oss],
  ['Previously', 'access_time', prev]
]

const Masthead = Flex.extend.attrs({
  direction: ['column', 'row'],
  minHeight: [null, '100vh'],
  textAlign: ['center', 'left'],
  px: 3
})`
  ${responsiveStyle('min-height', 'minHeight')}
  ${responsiveStyle('text-align', 'textAlign')}
`
const Name = Heading.extend.attrs({ f: 6, m: 0 })`
  font-weight: 800;
  line-height: 1;
`
const Bio = Subhead.extend.attrs({ is: 'h2', mt: 1, mb: 3 })`
  color: ${colors.grey};
  font-weight: 400;
  line-height: 1.5;
`
const Status = Text.extend.attrs({ is: 'mark', f: 3, mb: 3 })`
  background-color: #bfe6f9; /* image: linear-gradient(-100deg, #f3fafe, #bfe6f9 95%, #daf1fc); */
  border-radius: .5em;
  padding: 0 .5em;
  margin-left: -0.5em;
`

const Column = props => (
  <Flex column justify="center" flex="1 1 auto" p={[2, 3]} {...props} />
)

const Portrait = FloatLink.withComponent(Image).extend`
  border-radius: 24px;
  max-width: 50vw;
  max-height: 64vh;
`

export default () => (
  <main>
    <Meta title="Lachlan Campbell – @lachlanjc" />
    <Masthead>
      <Column align={['center', 'flex-end']}>
        <Portrait src="https://cdn.glitch.com/3ddbd40d-f89f-488c-a0eb-0dc4aa1ebc80%2Fstatic%2Fportrait.jpg?1500175195551" />
      </Column>
      <Column>
        <Name>Lachlan Campbell</Name>
        <Bio>Web designer-developer and high schooler.</Bio>
        <Flex align="center" justify={['center', 'flex-start']}>
          <Avatar
            src="https://cdn.glitch.com/3ddbd40d-f89f-488c-a0eb-0dc4aa1ebc80%2Favatar-pride.png?1500175240431"
            mr={2}
            size={36}
            style={{
              boxShadow: `0 0 0 2px ${colors.white}, 0 0 0 4px ${colors.blue}`
            }}
          />
          <Service href="https://twitter.com/lachlanjc" icon="twitter" />
          <Service href="https://github.com/lachlanjc" icon="github" />
          <Service href="https://instagram.com/lachlan.jc" icon="instagram" />
          <Service
            href="mailto:lachlan.campbell@icloud.com"
            icon="mail_outline"
          />
        </Flex>
      </Column>
    </Masthead>
    {sections.map(section => (
      <Box id={kebabCase(section[0])} key={lowerCase(section[0])} py={2}>
        <SectionHeading icon={section[1]} children={section[0]} />
        <ProjectGrid>
          {section[2].map(item => (
            <Project
              name={item.name}
              url={item.url}
              description={item.description}
              color={item.color}
              key={item.url}
            />
          ))}
        </ProjectGrid>
      </Box>
    ))}
    <Footer file="index" />
  </main>
)
