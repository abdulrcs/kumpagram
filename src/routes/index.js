import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

const Albums = lazy(() => import('pages/albums'))
const Home = lazy(() => import('pages/home'))
const Photos = lazy(() => import('pages/photos'))
const Posts = lazy(() => import('pages/posts'))
const Users = lazy(() => import('pages/users'))

export default function AppRoute() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/albums/:id" component={Photos} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/users" component={Users} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Suspense>
    </Router>
  )
}
