
import { useState, createContext, Children } from 'react';

export const MeuContexto = createContext();

export const MeuContextoProvider = ({ Children }) => {
  const [mensagem, setMensagem] = useState('Mensagem inicial');

  const valorDoContexto = {
    mensagem,
    setMensagem,
  };

  return (
    <MeuContexto.Provider value={valorDoContexto}>
      {children}
    </MeuContexto.Provider>
  );
};
