import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebaseConfig.js"
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("usuario criado com sucesso")
      Navigate('/login')
    } catch (error) {
      alert("ocorreu um erro")
    }
  }


  return (
    <main>
      <form onSubmit={handleRegister}>

        <h1 className='texto1'> Cadastro </h1>
        <label htmlFor="email">E-mail:</label>

        <input
          id="email"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          required
        />

        <label htmlFor="password">Senha:</label>

        <input
          id="password"
          placeholder="Password"
          type="password"
          value={senha}
          onChange={(evento) => setSenha(evento.target.value)}
          required
        />
        <button>enviar</button>
      </form>
    </main>
  )
}