import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tabla from './components/Tabla'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import Orden from './components/Orden'
import { useState } from 'react'

const App = () => {
  const datosAPI = MiApi()

  const [busqueda, setBusqueda] = useState('')
  const [ordenAscendente, setOrdenAscendente] = useState(false) // Establece el orden descendente por defecto

  const handleBusqueda = (valor) => {
    setBusqueda(valor)
  }

  const handleClick = () => {
    setOrdenAscendente(!ordenAscendente)
  }

  const datosFiltrados = Object.values(datosAPI).filter(indicador => {
    return indicador && indicador.nombre && indicador.nombre.toLowerCase().includes(busqueda.toLowerCase())
  })

  return (
    <div className='container'>
      <header className='title'>
        <h1>Datos Financieros</h1>
      </header>
      <div className='interface'>
        <Buscador onBuscar={handleBusqueda} />
        <Orden onClick={handleClick} ordenAscendente={ordenAscendente} />
      </div>
      <Tabla datos={datosFiltrados} ordenAscendente={ordenAscendente} />
    </div>
  )
}

export default App