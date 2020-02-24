import { Flex, Container, Heading, Badge, Text } from 'theme-ui'
import Slide from 'react-reveal/Slide'

const Banner = ({ children }) => (
  <Flex
    as="header"
    sx={{
      flexDirection: 'column',
      justifyContent: 'center',
      color: 'white',
      backgroundImage:
        'url(https://cdn.glitch.com/4d99d0f7-c364-44a5-b1b9-2c3c3f5cb333%2F_DSC1474.jpeg?v=1582521162110)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      py: [5, 6]
    }}
  >
    <Container
      variant="copyPlus"
      sx={{
        textAlign: 'center',
        textShadow:
          '0 1px 2px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.25)',
        ul: {
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 0,
          m: 0
        },
        li: {
          mr: [3, 4]
        },
        a: {
          display: 'inline-block',
          color: 'white',
          transition: 'transform .125s ease-in-out',
          transform: 'none',
          ':hover': {
            transform: 'scale(1.125) rotate(-4deg)'
          }
        }
      }}
    >
      <Slide bottom>
        <Heading
          as="h1"
          sx={{
            fontFamily: 'display',
            fontSize: [6, 7],
            mt: 0,
            mb: 3
          }}
        >
          Hey, I’m
          <br />
          Lachlan Campbell.
        </Heading>

        <Badge
          variant="pill"
          sx={{
            bg: 'primary',
            transform: 'rotate(-4deg)',
            fontSize: [3, 4],
            px: 3,
            transition: 'all .125s ease-in-out',
            textShadow: 'none',
            ':hover': {
              bg: 'blue',
              transform: 'scale(1.25) rotate(-356deg)'
            }
          }}
        >
          they/them
        </Badge>

        <Text
          variant="headline"
          sx={{
            mt: [3, 4, 5],
            mb: [4, 5],
            lineHeight: 'caption',
            fontSize: [3, 4],
            fontWeight: 'normal'
          }}
        >
          I’m a web designer-developer,
          <br />
          NYU&nbsp;’23, studying Interactive Media&nbsp;Arts.
        </Text>
        {children}
      </Slide>
    </Container>
  </Flex>
)

export default Banner
