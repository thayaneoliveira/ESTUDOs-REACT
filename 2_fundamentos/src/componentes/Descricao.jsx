// tag para completar automatico rafce


const Descricao = (props) => {
  // props = {}
  // propriedades -> Chaves dos valores
  // props.nome = "Matheus"
  return (
    <div>
      <p>Seu nome é: {props.nome}</p>
      <p>sua idade é: {props.idade}</p>
    </div>
  )
}

export default Descricao;