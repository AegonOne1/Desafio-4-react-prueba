import { Table } from 'react-bootstrap'

const Tabla = ({ datos }) => {
  const datosFiltrados = Object.values(datos).filter(indicador => {
    return indicador.nombre && indicador.valor && indicador.unidad_medida && indicador.fecha
  })

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Valor</th>
          <th>Unidad de Medida</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {datosFiltrados.map((indicador, index) => (
          <tr key={index}>
          <td>{indicador.nombre}</td>
          <td>{indicador.valor}</td>
          <td>{indicador.unidad_medida}</td>
          <td>{indicador.fecha.substring(0, 10)}</td>
        </tr>
        ))}
        </tbody>
    </Table>
    )
}
export default Tabla