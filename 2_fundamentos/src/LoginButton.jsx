import Button from "./Button";

const LoginButton = ({ loggedIn }) => {
  //loggedIn botão de entrar e sair. Deslogado e logado
  return (
    <div>{loggedIn ? <button>Sair</button> : <button>Entrar</button>}</div>
  );
};

export default LoginButton;
