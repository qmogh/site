import React from 'react'
import { Provider, Flex, Box, Banner, Heading, Text, Group } from 'rebass'
import { kebabCase } from 'lodash'
import theme, { colors, mx } from '../style'
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

const tenth = [
  {
    name: 'Greenhouse',
    url: 'greenhouse.now.sh',
    description: 'Website: the cause of climate change',
    color: '#05df73'
  },
  {
    name: 'Consumerism',
    url: 'twenties.now.sh',
    description: 'Presentation: 1920s consumerism',
    color: '#1FB6FF'
  },
  {
    name: 'Astrocolony',
    url: 'astrocolony.now.sh',
    description: 'Brochure: a Titan space colony',
    color: '#3c4858'
  },
  {
    name: 'L’Éducation Suisse 🇫🇷',
    url: 'swiss-edu.now.sh',
    description: 'Presentation: Swiss education',
    color: '#f30804'
  },
  {
    name: 'Sommeil 🇫🇷',
    url: 'sommeil.now.sh',
    description: 'Brochure: sleep at various ages',
    color: '#283593'
  },
  {
    name: 'Petit Prince 14 🇫🇷',
    url: 'petit-prince-14.now.sh',
    description: 'Presentation: Le Petit Prince ch. 14',
    color: '#f0a'
  }
]
const groups = [
  {
    name: 'LGBTQA+ Alliance',
    url: 'scasdpride.github.io',
    description: 'Pride group at my high school',
    color: '#F48D3A'
  },
  {
    name: 'TeenShale Data',
    url: 'teenshaledata.lachlanjc.me',
    description: 'Data parsing for TeenShale Network',
    color: '#0074D9'
  }
]
const sections = [
  ['Tenth grade', 'assignment', tenth],
  ['Groups', 'group_work', groups]
]
const backgroundImage =
  'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3' // const bg = 'https://images.unsplash.com/photo-1416339684178-3a239570f315'
const Masthead = Banner.extend.attrs({ bg: colors.accent, mb: 3 })`
  min-height: 32vh;
`
export default () => (
  <Provider theme={theme}>
    <Meta title="@lachlanjc/edu" />
    <Masthead>
      <Flex justify="center">
        <Icon name="school" />
        <Icon name="code" mx={2} />
        <Icon name="sentiment_very_satisfied" />
      </Flex>
      <Heading
        my={2}
        f={[5, 6]}
        color={colors.white}
        style={{ fontWeight: 300 }}
      >
        @lachlanjc/<strong style={{ fontWeight: 800 }}>edu</strong>
      </Heading>
    </Masthead>
    {sections.map(section => (
      <Box id={kebabCase(section[0])} key={kebabCase(section[0])} py={2}>
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
    <Footer file="edu" />
  </Provider>
)
