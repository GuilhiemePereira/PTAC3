import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { SignJWT } from 'jose';
import auth from './config/firebaseConfig.js';
import './style.css';

export default function LoginPage() {
  const [usuarioEmail, setUsuarioEmail] = useState('');
  const [usuarioSenha, setUsuarioSenha] = useState('');
  const redirecionar = useNavigate();

  const lidarComLogin = async (evento) => {
    evento.preventDefault();

    try {
    
      await signInWithEmailAndPassword(auth, usuarioEmail, usuarioSenha);
      alert('Login realizado com sucesso');

     
      const chaveSecreta = new TextEncoder().encode('minhaChave');
      const tokenJwt = await new SignJWT({ role: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(chaveSecreta);

      localStorage.setItem('authToken', tokenJwt);


      redirecionar('/view');
      alert('Você está logado!');
    } catch (erro) {
      console.error(erro);
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <main>
      <form onSubmit={lidarComLogin}>
        <h1 className="texto1">Acesso</h1>

        <label htmlFor="inputEmail">E-mail:</label>
        <input
          id="inputEmail"
          name="email"
          type="email"
          value={usuarioEmail}
          onChange={(e) => setUsuarioEmail(e.target.value)}
        />

        <label htmlFor="inputSenha">Senha:</label>
        <input
          id="inputSenha"
          name="senha"
          type="password"
          value={usuarioSenha}
          onChange={(e) => setUsuarioSenha(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>

      <p>Ainda não tem uma conta?</p>
      <Link to="/cadastro"><p>Registre-se aqui</p></Link>
    </main>
  );
}
