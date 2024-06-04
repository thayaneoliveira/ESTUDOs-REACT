import { useState } from "react"; //O useState tem que ser sempre importado dentro do react
// useState é um hook no React que permite adicionar estado a componentes de função. Com o useState, você pode declarar variáveis de estado dentro de um componente funcional. Ao atualizar o valor de uma variável de estado usando a função retornada pelo useState, o React irá re-renderizar o componente para refletir essa alteração.

const Counter = () => {
  // [consultar valor = "count" e alterar valor = "setCount"]
  //Variaveis não re-renderizam o componente
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>Você clicou {count} vezes.</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  );
};

export default Counter;
