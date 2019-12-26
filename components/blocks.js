import { Box } from 'rebass'

export const Banner = props => (
  <Box
    {...props}
    sx={{
      py: [4, 5, 6],
      h1: {
        fontSize: [6, 7],
        fontWeight: 'heading',
        lineHeight: 'tight',
        mt: [0, -2, -3],
        mb: 3
      },
      h2: {
        fontSize: [3, 4],
        fontWeight: 'normal',
        mb: 4
      },
      p: {
        mb: 4
      },
      ul: {
        listStyle: 'none',
        display: 'flex',
        p: 0,
        m: 0
      },
      li: {
        mr: 3
      },
      a: {
        variant: 'styles.navitem'
      }
    }}
  />
)

export const Container = ({ wide, ...props }) => (
  <Box
    {...props}
    variant="container"
    sx={{
      maxWidth: wide ? 'wide' : 'container'
    }}
  />
)

export const Tiles = props => (
  <Box
    {...props}
    sx={{
      ul: {
        listStyle: 'none',
        p: 0,
        m: 0,
        display: 'grid',
        gridGap: [3, 4],
        gridTemplateColumns: [null, 'repeat(auto-fit, minmax(384px, 1fr))']
      },
      li: {
        bg: 'elevated',
        color: 'elevatedText',
        p: [3, 4],
        borderRadius: 'extra',
        boxShadow: 'card',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform .125s ease-in-out',
        ':hover': {
          transform: 'scale(1.025) translateY(-4px)'
        },
        '> a:first-of-type': {
          display: 'block',
          m: [-3, -4],
          mb: [2, 3, 4]
        }
      },
      h2: {
        fontSize: [2, 3],
        mb: 1,
        lineHeight: 'heading',
        a: {
          color: 'inherit',
          textDecoration: 'none'
        }
      },
      p: {
        my: 0
      },
      img: {
        display: 'block',
        width: '100%',
        maxWidth: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
      },
      ...props.sx
    }}
  />
)

export const List = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: [null, 'repeat(auto-fit, minmax(256px, 1fr))'],
        gridGap: [3, 4]
      },
      a: {
        fontWeight: 'bold',
        color: 'primary',
        textDecoration: 'none'
      },
      em: {
        display: 'block',
        color: 'muted',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: 0
      },
      ...props.sx
    }}
  />
)
