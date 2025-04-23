import React from 'react';
import { useNavigate } from 'react-router-dom';

function History() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToHistory = () => {
    navigate('/history');
  };
  const navigateToLogin = () => {
    navigate('/Login');
  };
  return (
    <div id="wrapper">
      {/* Header */}
      <header id="header">
        <span className="logo" onClick={navigateToHome} style={{ cursor: 'pointer' }}>
          Diário
        </span>
      </header>

      {/* Nav */}
      <nav id="nav">
        <ul className="links">
          <li>
            <a onClick={() => navigate('/')}>Diário</a>
          </li>
          <li className="active">
            <a onClick={navigateToHistory}>Postagens</a>
          </li>
          <li className="active">
            <a onClick={navigateToLogin}>Login</a>
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
        {/* Post */}
        <section className="post">
          <header className="major">
            <span className="date">April 25, 2017</span>
            <h1>Postagens</h1>
            <p>
              Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis
              ante sed etiam magna interdum congue. Lorem ipsum dolor amet nullam sed
              etiam veroeros.
            </p>
          </header>
          <div className="image main">
            <img src="images/pic01.jpg" alt="" />
          </div>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.
            Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque
            leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu
            massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac,
            pretium pulvinar mauris.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
            rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
            porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc
            ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit
            amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla
            in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </section>
      </div>


      {/* Copyright */}
      <div id="copyright">
        <ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
      </div>
    </div>
  );
}

export default History;