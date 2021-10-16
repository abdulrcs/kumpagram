import axios from 'lib/axios'
import { useEffect, useState } from 'react'

const useFetchComments = postId => {
  const [comments, setComments] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (postId) {
      axios.get(`/posts/${postId}/comments`).then(res => {
        setComments(res.data)
        setLoaded(true)
      })
    }
  }, [])

  return { comments, setComments, loaded }
}

export default useFetchComments
