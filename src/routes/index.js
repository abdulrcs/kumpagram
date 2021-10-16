import Container from 'components/Common/Container'
import Loading from 'components/Common/Loading'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

const Albums = lazy(() => import('pages/AlbumPage'))
const Home = lazy(() => import('pages/HomePage'))
const Photos = lazy(() => import('pages/PhotoPage'))
const Posts = lazy(() => import('pages/PostPage'))
const Users = lazy(() => import('pages/UserPage'))

export default function AppRoute() {
  const dispatch = useDispatch()

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const callDispatch = async () => {
      await Promise.all([
        dispatch.users.fetchUsers(),
        dispatch.posts.fetchPosts(),
        dispatch.albums.fetchAlbums(),
      ])
      setLoaded(true)
    }
    callDispatch()
  }, [])
  return (
    <Router>
      <Container>
        {loaded && (
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact component={Home} path="/" />
              <Route exact component={Albums} path="/albums" />
              <Route exact component={Photos} path="/albums/:id" />
              <Route exact component={Posts} path="/posts" />
              <Route exact component={Posts} path="/users/:id/posts" />
              <Route exact component={Albums} path="/users/:id/albums" />
              <Route exact component={Users} path="/users" />
              <Redirect from="*" to="/404" />
            </Switch>
          </Suspense>
        )}
      </Container>
    </Router>
  )
}
