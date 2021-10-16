import { Box, HStack } from '@chakra-ui/layout'
import React from 'react'
import {
  IoChatbubbleOutline,
  IoHeartOutline,
  IoPaperPlaneOutline,
} from 'react-icons/io5'

export default function PostIcon() {
  return (
    <HStack pt={2} px={2} spacing={4}>
      <IoHeartOutline size="26px" />
      <Box transform="rotateY(180deg)">
        <IoChatbubbleOutline size="26px" />
      </Box>
      <IoPaperPlaneOutline size="26px" />
    </HStack>
  )
}
