import { Image } from '@chakra-ui/image'
import { HStack } from '@chakra-ui/layout'
import Link from 'components/Common/Link'
import React from 'react'
import {
  IoHome,
  IoHomeOutline,
  IoImages,
  IoImagesOutline,
  IoNewspaper,
  IoNewspaperOutline,
  IoPeople,
  IoPeopleOutline,
} from 'react-icons/io5'
import { useLocation } from 'react-router-dom'
import logo from 'static/logo.svg'

export default function Navbar() {
  const { pathname } = useLocation()
  return (
    <HStack
      alignItems="center"
      bg="white"
      borderBottom="1px solid #dbdbdb"
      h="56 px"
      justifyContent="space-between"
      px={{ base: '2.5%', md: '10%' }}
      py={2}
      w="100%"
    >
      <Link to="/">
        <Image src={logo} w="120px" />
      </Link>
      <HStack fontSize="xl" spacing={8}>
        <Link to="/">{pathname === '/' ? <IoHome /> : <IoHomeOutline />}</Link>
        <Link to="/posts">
          {pathname === '/posts' ? <IoNewspaper /> : <IoNewspaperOutline />}
        </Link>
        <Link to="/albums">
          {pathname === '/albums' ? <IoImages /> : <IoImagesOutline />}
        </Link>
        <Link to="/users">
          {pathname === '/users' ? <IoPeople /> : <IoPeopleOutline />}
        </Link>
      </HStack>
    </HStack>
  )
}
