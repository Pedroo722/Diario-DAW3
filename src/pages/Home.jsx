import React, { useEffect, useState, useContext } from 'react';
import '../assets/css/main.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();

  const { userToken } = useContext(UserContext);
  const [postData, setPostData] = useState({
    title: '',
    summary: '',
    image: null
  });
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [highlightedPost, setHighlightedPost] = useState({});
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/posts/list?page=${page}&size=2`).then(res => res.data);
        setHighlightedPost(response.content[0]);
        setPosts(response.content);
        setPageCount(response.totalPages);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      }
    };

    getPosts();
  }, [page]);

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

    if (userToken) {
      const formData = new FormData();
      formData.append('title', postData.title);
      formData.append('body', postData.summary);
      formData.append('image', postData.image);

      try {
        const response = await axios.post('http://localhost:8081/posts/create', {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${userToken}`
          },
        });

        alert('Postagem criada com sucesso!');
      } catch (error) {
        alert('Houve um erro ao criar a postagem!');
        console.log(error)
      }
    } else {
      alert('Faça login primeiro.');
      navigate('/login');
    }
  };

  const Post = ({ title, body, image, createdAt }) => {
    return (
      <article>
        <header>
          <span className="date">{formatDate(createdAt)}</span>
          <h2>
            <a onClick={() => navigate('#')}>{title}</a>
          </h2>
        </header>
        <a href="#" className="image fit">
          <img src={image} />
        </a>
        <p>
          {body}
        </p>
        <ul className="actions special">
          <li>
            <a
              onClick={() => setHighlightedPost({ title, body, image })}
              className="button"
              style={{ cursor: 'pointer' }}
            >
              História Completa
            </a>
          </li>
        </ul>
      </article>
    );
  }

  const NumberFooter = ({ quantity }) => {
    return (
      <footer>
        <div className="pagination">
          {quantity > 7 && page < (quantity - 7) ?
            <span>
              <a onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }} className="previous">
                Anterior
              </a>
              <a className="page active">
                {page + 1}
              </a>
              <a onClick={() => setPage(page + 1)} className="page">
                {page + 2}
              </a>
              <a onClick={() => setPage(page + 2)} className="page">
                {page + 3}
              </a>
              <span className="extra">&hellip;</span>
              <a onClick={() => setPage(quantity - 3)} className="page">
                {quantity - 3}
              </a>
              <a onClick={() => setPage(quantity - 2)} href="#" className="page">
                {quantity - 2}
              </a>
              <a onClick={() => setPage(quantity - 1)} href="#" className="page">
                {quantity - 1}
              </a>
              <a onClick={() => {
                if (page < quantity) {
                  setPage(page + 1);
                }
              }} className="next">
                Próximo
              </a>
            </span>
            : <span>
              <a onClick={() => {
                if (page > 0) {
                  setPage(page - 1);
                }
              }} className="previous">
                Anterior
              </a>
              {new Array(quantity).fill(null).map((n, i) => <a onClick={() => setPage(i)} className={`page${i == page ? " active" : ""}`}>{i + 1}</a>)}
              <a onClick={() => {
                if (page < quantity - 1) {
                  setPage(page + 1);
                }
              }} className="next">
                Próximo
              </a>
            </span>
          }
        </div>
      </footer>
    );
  }

  const formatDate = (date) => {
    let fullDate = new Date(date);
    return months[fullDate.getMonth()] + " " + (fullDate.getDate() + 1) + ", " + fullDate.getFullYear();
  }

  return (
    <div id="wrapper" className="fade-in">

      {/* Intro */}
      <div id="intro">
        <h1>Diário</h1>
        <p>
          A free, fully responsive React site made by{' '}
          <a href="https://twitter.com/ajlkn">@Pedro</a>, <a href="https://twitter.com/ajlkn">@Raykkoner</a>, <a href="https://twitter.com/ajlkn">@Thiago</a> and <a href="https://twitter.com/ajlkn">@Vinícius</a>
          <br />
          based on the template designed by{' '}
          <a href="https://html5up.net/">HTML5 UP</a>.
        </p>
        <ul className="actions">
          <li>
            <button
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
              }}
              className="button icon solid solo fa-arrow-down scrolly"
              style={{ cursor: 'pointer' }}
            />
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
        <a href="#" className="icon brands fa-github">
          <span className="label">GitHub</span>
        </a>
      </nav>

      {/* Main Content */}
      <div id="main">
        {highlightedPost &&
          <article className="post featured">
            <header className="major">
              <span className="date">{formatDate(highlightedPost.createdAt)}</span>
              <h2>
                <a onClick={() => navigate('#')}>{highlightedPost?.title}</a>
              </h2>
              <p>
                {highlightedPost?.body}
              </p>
            </header>
            <a href="#" className="image main">
              <img src={highlightedPost.image} alt="" />
            </a>
          </article>
        }

        <section className="posts">
          {posts.map(({ title, body, image, createdAt }) => <Post title={title} body={body} image={image} createdAt={createdAt} />)}
        </section>

        {/* Pagination Footer */}
        <NumberFooter quantity={pageCount} />
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
        <span>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </span>
      </div>
    </div>
  );
};

export default Home;
