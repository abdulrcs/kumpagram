import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import AlbumPage from 'pages/AlbumPage'
import React from 'react'
import customRender from './test-utils'

test('renders AlbumPage correctly', () => {
  customRender(<AlbumPage />)
  setTimeout(() => {
    expect(screen.getByText(/Album by Bret/i)).toBeInTheDocument()
    expect(screen.getByText('quidem molestiae enim')).toBeInTheDocument()
  }, 1000)
})
