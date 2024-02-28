import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tabla from './components/Tabla'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import { useState } from 'react'

const App = () => {
  const datosAPI = MiApi()

  const [busqueda, setBusqueda] = useState('')

  const handleBusqueda = (valor) => {
    setBusqueda(valor)
  };

  const datosFiltrados = Object.values(datosAPI).filter(indicador => {
    return indicador && indicador.nombre && indicador.nombre.toLowerCase().includes(busqueda.toLowerCase())
  })

  return (
    <div>
      <h2>Datos Financieros</h2>
      <Buscador onBuscar={handleBusqueda} />
      <Tabla datos={datosFiltrados} />
    </div>
  )
}

export default App