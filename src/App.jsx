import logo from '../src/assets/logo-nav.svg'
import { useState } from 'react'
import Modal from './components/modal'

export default function App() {
  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem("obc-book-lib")
    if (!storedBooks) {
      return []
    } return JSON.parse(storedBooks)
  })
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const addBooks = ({ title, cover }) => {
    if (title === '' || cover === '') {
      setModalMessage('Preencha todos os campos')
      setShowModal(true)
    } else {
      const existingBook = books.find(book => book.title.toLowerCase() === title.toLowerCase())
      if (existingBook) {
        setModalMessage('Livro ja cadastrado!')
        setShowModal(true)
      } else {
        const id = Math.floor(Math.random() * 1000000);
        const newBook = { id, title, cover }
        const newState = [...books, newBook]
        setBooks(newState)
        localStorage.setItem("obc-book-lib", JSON.stringify(newState))
      }
    }
  }

  const removeBooks = (id) => {
    setBooks(state => {
      const newState = state.filter(book => book.id !== id)
      localStorage.setItem("obc-book-lib", JSON.stringify(newState))
      return newState
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setCover("")
    setTitle("")
    addBooks({ title, cover })
  }

  return (
    <div className="app">
      <nav>
        <img src={logo} alt="" />
        <p>CULTURE</p>
      </nav>
      <div className="container">
        <h1>BEM VINDO À CULTURE</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id='title'
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input
            type="text"
            id='cover'
            value={cover}
            onChange={(ev) => setCover(ev.target.value)}
          />
        </div>
        <button>Adicionar livro</button>
      </form>
      <div className='layout-books'>
        {books.map((book) => (
          <div className='book' key={book.id}>
            <img src={book.cover} alt="" />
            <p>{book.title}</p>
            <div className="btn-book">
              <button>Editar</button>
              <button onClick={() => removeBooks(book.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <Modal
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>

  )
} 


