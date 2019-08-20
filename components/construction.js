import { Flex } from 'rebass'
import Icon from '../components/icon'

export default ({ sx, ...props }) =>
  <Flex {...props} sx={{ alignItems: 'center', bg: 'orange', color: 'white', borderRadius: 'default', lineHeight: 'heading', p: [2, null, 3], mb: [4, 5], ...sx }}>
    <Icon glyph="flag" size={32} sx={{ mr: [2, 3] }} />
    Site is currently under construction
  </Flex>
