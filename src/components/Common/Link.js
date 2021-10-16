import { Link as ChakraLink } from '@chakra-ui/layout'
import PropTypes from 'prop-types'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

function Link({ to, children }) {
  return (
    <ChakraLink
      _focus={{ outline: 'none' }}
      _hover={{ textDecoration: 'none' }}
      as={RouterLink}
      to={to}
    >
      {children}
    </ChakraLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default Link
