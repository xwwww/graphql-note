import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_BOOKS = gql`
{
  books {
    name
    genre
    id
  }
}
`
function BookList(props)  {
  const { loading, error, data, refetch } = useQuery(GET_BOOKS)
  const { state } = props
  console.log(props, state)
  useEffect(() => {
    if (state) {
      refetch()
    }
  })

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <ul id="book-list">
      {data.books.map(book => (
        <li key={book.id}>
          书名： {book.name}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default BookList