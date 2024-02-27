import { Table } from "react-bootstrap"

const dataDummie = [
    {
        codigo: 'UF',
        nombre: 'unidad de fomento (UF)',
        valor: 36838.78,
    },
    {
        codigo: 'Dolar',
        nombre: 'Dolar ($)',
        valor: 986.85,
    },
    {
        codigo: 'Euro',
        nombre: 'Euro (Є)',
        valor: 1070.57,
    }
]

const Tabla = (data = dataDummie) => {
    const renderTh = () =>{
        let heads = []
        data.forEach((dataElement, index) =>{
            if (index == 0){
                const tempHeads = Object.keys(dataElement)
                if(typeof(data[0][tempHead]) != "object"){
                    heads.push(tempHead)
                }
            }
        })
        return heads.map((h) => <th key={h}>{h}</th>)
    }

    const renderTd = (td) => {
        return Object.keys(td).map((item) =>{
            if (item)
        })
    }
  return (
    <div className="contenedor">
    <Table striped bordered hover className="tabla de contenido">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default Listado;