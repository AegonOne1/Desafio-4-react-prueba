import { Button } from "react-bootstrap"

const Orden = ({ onClick }) => {
    return(
        <Button variant="light" onClick={onClick}>Ordenar</Button>
    )
}

export default Orden