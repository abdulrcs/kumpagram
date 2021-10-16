import { Text, VStack } from '@chakra-ui/layout'
import PropTypes from 'prop-types'
import React from 'react'

export default function StatusItem({ count, label }) {
  return (
    <VStack spacing={0}>
      <Text fontSize="2xl" fontWeight="bold">
        {count}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </VStack>
  )
}

StatusItem.propTypes = {
  count: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
}
