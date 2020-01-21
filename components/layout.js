import { Box, Flex, Link as A } from 'rebass'
import { useColorMode } from 'theme-ui'
import Link from 'next/link'
import Icon from './icon'
import Avatar from './avatar'

const ColorButton = ({ mode, ...props }) => (
  <Box
    as="button"
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      lineHeight: 0,
      ':hover, :focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none'
      }
    }}
  >
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor">
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
    </svg>
  </Box>
)

const colors = {
  red: '#ec3750',
  orange: '#ff8c37',
  yellow: '#f1c40f',
  green: '#33d6a6',
  cyan: '#5bc0de',
  blue: '#338eda'
}

export default props => {
  const [mode, setMode] = useColorMode()

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '4rem',
          display: 'block',
          backgroundImage:
            `linear-gradient(${colors.red} 0%, ${colors.red} 16.6666%, ${colors.orange} 16.6666%, ${colors.orange} 33.333%, ${colors.yellow} 33.333%, ${colors.yellow} 50%, ${colors.green} 50%, ${colors.green} 66.6666%, ${colors.blue} 66.6666%, ${colors.blue} 83.3333%, #8067C3 83.3333%, #8067C3 100%)`
        }}
      />
      <Flex
        as="header"
        variant="container"
        sx={{
          alignItems: 'center',
          px: 3,
          py: 4,
          'a + a': { mx: [2, 3] }
        }}
      >
        <Avatar size={48} sx={{ mr: 3 }} />
        <Link href="/">
          <A variant="styles.navitem">@lachlanjc</A>
        </Link>
        <Box sx={{ mx: 'auto' }} />
        <Link href="/resume">
          <A variant="styles.navitem">Résumé</A>
        </Link>
        <A
          href="https://notebook.lachlanjc.me"
          target="_blank"
          variant="styles.navitem"
        >
          Notebook
        </A>
        <ColorButton
          onClick={e => {
            const next = mode === 'dark' ? 'light' : 'dark'
            setMode(next)
          }}
        />
      </Flex>
      <Box
        as="main"
        sx={{
          width: '100%',
          maxWidth: 'container',
          px: 3,
          mx: 'auto',
          flex: '1 1 auto'
        }}
      >
        {props.children}
      </Box>
      <Box
        as="footer"
        variant="container"
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto'
        }}
      >
        <Flex
          sx={{
            py: 4,
            justifyContent: 'center',
            a: { color: 'primary', mx: 2 }
          }}
        >
          <Avatar sx={{ mr: 3 }} />
          <a
            href="https://twitter.com/lachlanjc"
            title="Twitter"
            target="_blank"
            variant="styles.navitem"
          >
            <Icon glyph="twitter" size={36} />
          </a>
          <a
            href="https://github.com/lachlanjc/notebook"
            title="GitHub"
            target="_blank"
            variant="styles.navitem"
          >
            <Icon glyph="github" size={36} />
          </a>
          <a
            href="https://instagram.com/lachlan.jc"
            title="Instagram"
            target="_blank"
            variant="styles.navitem"
          >
            <Icon glyph="instagram" size={36} />
          </a>
          <a
            href="mailto:lachlan@hackpenn.com"
            title="Email"
            variant="styles.navitem"
          >
            <Icon glyph="email" size={36} />
          </a>
        </Flex>
      </Box>
    </>
  )
}
