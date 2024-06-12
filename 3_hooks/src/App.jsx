import './App.css';
import Exemplo from './componentes/Exemplo';

import Timer from './componentes/Timer';

function App() {
  return (
    <>
      {/* 8.1 - useEffect*/}
      <Exemplo />
      <Timer />
      {/* 8.2 - useContext */}
      {/* Aplicação de pequenos e médio porte, que precisam transferir o estado entre componentes */}
      ''
    </>
  );
}

export default App;
