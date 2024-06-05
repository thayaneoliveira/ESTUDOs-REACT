import "./App.css";

import Welcome from "./componentes/Welcome"; //Serve para chamar a pasta
import BomDia from "./componentes/BomDia";
import Pai from "./componentes/Pai";
import Descricao from "./componentes/Descricao";
import Cachorro from "./componentes/Cachorro";
import Counter from "./componentes/Counter";
import UserInfor from "./UserInfor";
import Button from "./Button";
import PaiFunction from "./PaiFunction";
import Form from "./componentes/Form";
import RenderCondicional from "./componentes/RenderCondicional";

function App() {
  return (
    // Quando se usa mais de uma linha usa o return (,,,,k,kjlklkl) quando usa apenas uma linha não precisa de (gfghhjh) coda direto sem parentese //
    <>
      {/* 6.1 - Criação de componente */}
      <Welcome />
      {/*6.2 - Expressões do jsx */}
      <BomDia />
      {/* 6.3 - Componente dentro de componente */}
      <Pai />
      {/* 6.4 - props */}
      <Descricao nome="Thayane" idade={27} />
      {/* 6.5 - Desestruturação de props */}
      <Cachorro nome="Scotty" raca="Poodle" />
      {/* 6.6 - useState -> hook*/}
      <Counter />
      {/* 6.7 - multiplos estados */}
      <UserInfor />
      {/* 6.8 - Eventos */}
      <Button />
      {/* 6.9 - Passando funções de manipulação de eventos como props */}
      <PaiFunction />
      {/* 6.10 - eventos de form */}
      <Form />
      {/* 6.11 - Renderização condicional */}
      <RenderCondicional user="Thayane" />
      {/* 6.12 - Expressão ternaria */}
      
    </>
  );
}
export default App;
