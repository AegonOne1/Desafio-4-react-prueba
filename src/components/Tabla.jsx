import { Table } from 'react-bootstrap';
import MiApi from './MiApi';

const ApiDataTabla = () => {
    const datosAPI = MiApi()

    const datosFiltrados = datosAPI && Object.values(datosAPI).filter((dato) => (
        dato.valor && dato.unidad_medida && dato.fecha && !isNaN(new Date(dato.fecha))
    ));

    return (
        <div>
          <h2>Datos Financieros</h2>
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
              {datosFiltrados && datosFiltrados.map((dato, index) => (
                <tr key={index}>
                  <td>{dato.nombre}</td>
                  <td>{dato.valor}</td>
                  <td>{dato.unidad_medida}</td>
                  <td>{new Date(dato.fecha).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    };

export default ApiDataTabla;