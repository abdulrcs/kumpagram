import { Box } from '@chakra-ui/layout'
import Navbar from 'components/Common/Navbar'
import PropTypes from 'prop-types'
import React from 'react'

function Container({ children }) {
  return (
    <>
      <Navbar />
      <Box
        bg="#fafafa"
        minH="calc(100vh - 56px)"
        px={{ base: '2.5%', md: '10%' }}
        py={{ base: '1.25%', md: '2.5%' }}
        w="100%"
      >
        {children}
      </Box>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
