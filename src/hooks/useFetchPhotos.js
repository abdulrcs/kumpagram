import axios from 'lib/axios'
import { useEffect, useState } from 'react'

const useFetchPhotos = albumId => {
  const [photos, setPhotos] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (albumId) {
      axios.get(`/album/${albumId}/photos`).then(res => {
        setPhotos(res.data)
        setLoaded(true)
      })
    }
  }, [])

  return { photos, setPhotos, loaded }
}

export default useFetchPhotos
