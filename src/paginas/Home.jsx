import React from 'react'
import ListaPost from '../componentes/ListaPost'
import ListaCategorias from '../componentes/ListaCategorias'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias />
      <ListaPost url={'/posts'} />
    </main>
    
  )
}

export default Home
