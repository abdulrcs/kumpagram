import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import UserPage from 'pages/UserPage'
import React from 'react'
import customRender from './test-utils'

test('renders UserPage correctly', () => {
  customRender(<UserPage />)
  setTimeout(() => {
    expect(screen.getByText('Suggestion For You')).toBeInTheDocument()
    expect(screen.getByText('Bret')).toBeInTheDocument()
    expect(screen.getByText('Sincere@april.biz')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
    expect(screen.getByText('Albums')).toBeInTheDocument()
  }, 1000)
})
