
import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../assets/css/main.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userToken, setUserToken } = useContext(UserContext);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await axios.post('http://localhost:8081/auth/login', {
          email,
          password,
        });

        setUserToken(response.data.jwtToken);
        navigate('/');
      } else {
        const response = await axios.post('http://localhost:8081/auth/signup', {
          name,
          email,
          password,
        });

        alert("Agora faça login com as credenciais registradaas.");
        toggleMode();
      }
    } catch (error) {
      const msg = error.response?.data?.message || 'Erro desconhecido';
      alert(`Erro na autenticação: ${msg}`);
    }
  };

  return (
    <div id="wrapper" className="fade-in">
      <header id="header">
        <span className="logo">{isLogin ? 'Login' : 'Cadastro'}</span>
      </header>

      <div id="main" style={{ padding: '2rem' }}>
        <section className="post">
          <form onSubmit={handleSubmit}>
            <div className="fields">
              {!isLogin && (
                <div className="field">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="custom-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="custom-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  className="custom-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value={isLogin ? 'Entrar' : 'Cadastrar'}
                  className="primary"
                />
              </li>
              <li>
                <a onClick={toggleMode} style={{ cursor: 'pointer' }}>
                  {isLogin
                    ? 'Ainda não tem uma conta? Cadastre-se'
                    : 'Já tem uma conta? Faça login'}
                </a>
              </li>
            </ul>
          </form>
        </section>
      </div>

      <footer id="footer">
        <p style={{ textAlign: 'center' }}>&copy; Diário. Design: HTML5 UP.</p>
      </footer>
    </div>
  );
};
export default Login;

