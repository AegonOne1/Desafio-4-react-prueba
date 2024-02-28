const Buscador = ({ onBuscar }) => {
    const handleChange = (e) => {
        onBuscar(e.target.value)
    }

    return(
        <input 
        type="text"
        placeholder="Buscar"
        onChange={handleChange} 
        />
    )
}

export default Buscador