import React from 'react'
import { Box } from 'theme-ui'
import Icon from '@hackclub/icons'

export default ({ sx, ...props }) => (
  <Box sx={{ lineHeight: 0, ...sx }}>
    <Icon {...props} />
  </Box>
)
