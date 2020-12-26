import React from 'react'
import {  connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    
    const newAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        props.createAnecdote(content)
        props.setNotification(`${content} is created`,5000)
      }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div>
          <input name="anecdote"/>
          </div>
        <button>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
    createAnecdote,
    setNotification
  }

export default connect(null, mapDispatchToProps)(AnecdoteForm)