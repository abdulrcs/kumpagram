import { Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Photos() {
  const { id } = useParams()
  return (
    <>
      <Text>Albums of user with id of {id}</Text>
    </>
  )
}
