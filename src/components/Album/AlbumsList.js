import { SimpleGrid } from '@chakra-ui/layout'
import AlbumCard from 'components/Album/AlbumCard'
import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'

export default function AlbumsList({ userId }) {
  const users = useSelector(state => state.users)
  let albums = useSelector(state => state.albums)
  albums = userId ? albums.filter(album => album.userId === userId) : albums
  return (
    <>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
        {albums.map(album => (
          <AlbumCard
            key={album.id}
            album={album}
            user={users[album.userId - 1]}
          />
        ))}
      </SimpleGrid>
    </>
  )
}

AlbumsList.propTypes = {
  userId: PropTypes.number,
}
