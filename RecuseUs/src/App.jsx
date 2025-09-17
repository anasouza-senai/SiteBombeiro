import React from 'react'
import CardRecursos from './components/CardRecursos'


const App = () => {
  return (
    <div className='align-items-center'>

      <h2>Recursos Essenciais</h2>
      <p >Ferramentas desenvolvidas especialmente para as necessidades dos
      bombeiros em campo</p>
      <CardRecursos
      />
      <h2>Recursos Essenciais</h2>
      <p>Veja o que os bombeiros de todo o Brasil estão dizendo.</p>

    </div>
  )
}

export default App
