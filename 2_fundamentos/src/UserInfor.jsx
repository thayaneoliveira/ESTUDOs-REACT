import { useState } from "react";

const UserInfor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // acessar a API via fetch ou axios

    console.log(name, email);
  };

  //precisa vincular a funcão ao formulario
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o seu nome"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite o seu e-mail"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default UserInfor;
