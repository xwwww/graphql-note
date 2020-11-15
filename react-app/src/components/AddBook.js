import React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'

const GET_AUTHORS = gql`
{
  authors {
    name
    id
  }
}
`
const ADD_BOOK = gql`
mutation addBook($name: String!,  $genre: String!,  $authorId: ID!) {
  addBook(name: $name, genre: $genre, authorId: $authorId) {
    name
    genre
    author {
      name
    }
  }
}
`
function AddBook (props) {
  const { loading, error, data } = useQuery(GET_AUTHORS)
  let authors
  if (error) {
    authors = <option disabled>错误</option>
  } else if (loading) {
    authors = <option disabled>加载中...</option>
  } else {
    authors = data.authors.map(author => {
      return <option key={author.id} value={author.id}>{author.name}</option>
    })
  }

  const [addBook, {result}] = useMutation(ADD_BOOK)
  const { state, handleAdd } = props
  let name
  let genre
  let authorId
  return (
    <form onSubmit={e => {
      e.preventDefault()
      const result = addBook({variables: { 
        name: name.value,
        genre: genre.value,
        authorId: authorId.value
      }})
      console.log(result)
      handleAdd(state+1)
    }}>
      <div className="field">
        <label>书名</label>
        <input type="text" ref={node => {name = node}}/>
      </div>
      <div className="field">
        <label>类别</label>
        <input type="text" ref={node => {genre = node}}/>
      </div>
      <div className="field">
        <label>作者</label>
        <select ref={node => { authorId = node }}>
          <option>请选择</option>
          { authors }
        </select>
      </div>
      <button type="submit">+</button>
    </form>
    
  )
}

export default AddBook