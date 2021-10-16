import { SimpleGrid } from '@chakra-ui/layout'
import PhotoCard from 'components/Photo/PhotoCard'
import useFetchPhotos from 'hooks/useFetchPhotos'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function PhotoList() {
  const { id } = useParams()
  const { photos, loaded } = useFetchPhotos(id)
  return (
    <>
      {loaded && (
        <SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} spacing={4}>
          {photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </SimpleGrid>
      )}
    </>
  )
}
