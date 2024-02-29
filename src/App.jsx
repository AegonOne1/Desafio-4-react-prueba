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

  const toggleOrden = () => {
    setOrdenAscendente(!ordenAscendente)
  }

  const datosFiltrados = Object.values(datosAPI).filter(indicador => {
    return indicador && indicador.nombre && indicador.nombre.toLowerCase().includes(busqueda.toLowerCase())
  })

  return (
    <div>
      <h2>Datos Financieros</h2>
      <Buscador onBuscar={handleBusqueda} />
      <Orden onClick={toggleOrden} ordenAscendente={ordenAscendente} />
      <Tabla datos={datosFiltrados} ordenAscendente={ordenAscendente} />
    </div>
  )
}

export default App