import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import PostPage from 'pages/PostPage'
import React from 'react'
import customRender from './test-utils'

test('renders PostPage correctly', () => {
  customRender(<PostPage />)
  setTimeout(() => {
    expect(
      screen.getByText(
        /sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i
      )
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Add a comment...')).toBeInTheDocument()
  }, 1000)
})
