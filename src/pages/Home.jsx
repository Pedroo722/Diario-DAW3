import React, { useState } from 'react';
import '../assets/css/main.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    title: '',
    summary: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setPostData({
      ...postData,
      image: files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('summary', postData.summary);
    formData.append('image', postData.image);

    try {
      const response = await axios.post('http://localhost:8081/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Postagem criada:', response.data);
      alert('Postagem criada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar postagem:', error);
      alert('Houve um erro ao criar a postagem!');
    }
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div id="wrapper" className="fade-in">

      {/* Intro */}
      <div id="intro">
        <h1>Diário</h1>
        <p>
          A free, fully responsive HTML5 + CSS3 site template designed by{' '}
          <a href="https://twitter.com/ajlkn">@ajlkn</a> for{' '}
          <a href="https://html5up.net">HTML5 UP</a>
          <br />
          and released for free under the{' '}
          <a href="https://html5up.net/license">Creative Commons license</a>.
        </p>
        <ul className="actions">
          <li>
            <a
              onClick={() => navigate('#header')}
              className="button icon solid solo fa-arrow-down scrolly"
              style={{ cursor: 'pointer' }}
            >
              Continue
            </a>
          </li>
        </ul>
      </div>

      {/* Header */}
      <header id="header">
        <span className="logo">Diário</span>
      </header>

      {/* Nav */}
      <nav id="nav">
        <ul className="links">
          <li className="active">
            <a onClick={() => navigate('/')}>Diário</a>
          </li>
          <li>
            <a onClick={() => navigate('/login')}>Login</a>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div id="main">
        <article className="post featured">
          <header className="major">
            <span className="date">April 25, 2017</span>
            <h2>
              <a onClick={() => navigate('#')}>And this is a<br />massive headline</a>
            </h2>
            <p>
              Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis
              ante sed etiam magna interdum congue. Lorem ipsum dolor amet nullam sed
              etiam veroeros.
            </p>
          </header>
          <a href="#" className="image main">
            <img src="images/pic01.jpg" alt="" />
          </a>
          <ul className="actions special">
            <li>
              <a
                onClick={() => navigate('/fullstory')}
                className="button large"
                style={{ cursor: 'pointer' }}
              >
                História Completa
              </a>
            </li>
          </ul>
        </article>

        <section className="posts">
          <article>
            <header>
              <span className="date">April 24, 2017</span>
              <h2>
                <a onClick={() => navigate('#')}>Sed magna<br />ipsum faucibus</a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <img src="images/pic02.jpg" alt="" />
            </a>
            <p>
              Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis
              magna etiam.
            </p>
            <ul className="actions special">
              <li>
                <a
                  onClick={() => navigate('/fullstory')}
                  className="button"
                  style={{ cursor: 'pointer' }}
                >
                  História Completa
                </a>
              </li>
            </ul>
          </article>
        </section>

        {/* Pagination Footer */}
        <footer>
          <div className="pagination">
            <a href="#" className="page active">
              1
            </a>
            <a href="#" className="page">
              2
            </a>
            <a href="#" className="page">
              3
            </a>
            <span className="extra">&hellip;</span>
            <a href="#" className="page">
              8
            </a>
            <a href="#" className="page">
              9
            </a>
            <a href="#" className="page">
              10
            </a>
            <a href="#" className="next">
              Next
            </a>
          </div>
        </footer>
      </div>

      {/* Footer: Formulário de Postagem */}
      <footer id="footer">
        <section>
          <form onSubmit={handleSubmit}>
            <div className="fields">
              <div className="field">
                <label htmlFor="title">Título</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={postData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="summary">Resumo</label>
                <textarea
                  name="summary"
                  id="summary"
                  value={postData.summary}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="field">
                <label htmlFor="image">Imagem</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Enviar" />
              </li>
            </ul>
          </form>
        </section>
      </footer>

      {/* Copyright */}
      <div id="copyright">
        <ul>
          <li>&copy; Untitled</li>
          <li>
            Design: <a href="https://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
