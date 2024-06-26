import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeAnecdote } from './reducers/anecdoteReducer'
import AnecdoteFrom from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'



const App = () => {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(initializeAnecdote())
  },[dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteFrom />
    </div>
  )
}

export default App