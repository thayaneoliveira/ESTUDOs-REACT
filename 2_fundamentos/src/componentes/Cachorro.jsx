
// desestruturação de props. 
const Cachorro = ({nome, raca}) => {
  // props.nome => nome
  return (
    <div>
      <p>O cachorro tem o nome de {nome} e a raça {raca}</p>
    </div>
  )
}

export default Cachorro; 