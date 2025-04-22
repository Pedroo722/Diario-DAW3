import React, { useState } from 'react';
import '../assets/css/main.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Fazer login com:', email, password);
      // outra pag
      navigate('/');
    } else {
      console.log('Cadastrar com:', name, email, password);
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
