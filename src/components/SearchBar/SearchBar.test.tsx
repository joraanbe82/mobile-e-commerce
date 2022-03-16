import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'
import store from '../../store'
import SearchBar from './SearchBar'

describe('Test input to filter data', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </Router>,
    )
  })

  test('input should be render', () => {
    const searchInputEl = screen.getByTestId<HTMLInputElement>(/input-search/i)
    expect(searchInputEl).toBeInTheDocument()
  })

  test('input should be initially empty', () => {
    const searchInputEl = screen.getByTestId<HTMLInputElement>(/input-search/i)
    expect(searchInputEl.value).toBe('')
  })

  test('should be able to type a search', () => {
    const searchInputEl = screen.getByTestId<HTMLInputElement>(/input-search/i)
    userEvent.type(searchInputEl, 'alcatel')
    expect(searchInputEl.value).toBe('alcatel')
  })
})
