import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import Home from 'pages/HomePage'
import React from 'react'
import customRender from './test-utils'

test('renders HomePage correctly', () => {
  customRender(<Home />)
  expect(screen.getByText('+ Add Post')).toBeInTheDocument()
  expect(screen.getByText('Suggestion For You')).toBeInTheDocument()
  expect(screen.getByText('Users')).toBeInTheDocument()
  expect(screen.getByText('Posts')).toBeInTheDocument()
  expect(screen.getByText('Albums')).toBeInTheDocument()
})
