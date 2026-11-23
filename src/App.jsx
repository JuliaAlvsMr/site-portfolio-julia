
import "./styles.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <p className="header-small">PORTFÓLIO ACADÊMICO</p>

          <h1 className="header-title">
            Júlia Alves Marçal
          </h1>

          <p className="header-subtitle">
            Desenvolvimento de Sistemas
          </p>
        </div>

        <button
          className="menu-toggle"
          onClick={() =>
            document
              .querySelector(".nav-menu")
              .classList.toggle("menu-open")
          }
          aria-label="Abrir menu"
        >
          ☰
        </button>

        <nav className="nav-menu">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#disciplinas">Disciplinas</a>
          <a href="#atividades">Atividades</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="profile-section" id="inicio">
          <div className="profile-image">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Foto de Júlia Alves Marçal"
            />
          </div>

          <div className="profile-content">
            <p className="section-label">BEM-VINDO AO MEU PORTFÓLIO</p>

            <h2>Olá, eu sou a Júlia!</h2>

            <p>
              Estudante do Ensino Médio integrado ao curso técnico em
              Desenvolvimento de Sistemas, apaixonada por tecnologia,
              criatividade e aprendizado.
            </p>

            <div className="profile-info">
              <p><strong>Curso:</strong> Desenvolvimento de Sistemas</p>
              <p><strong>Turma:</strong> 3º B DS</p>
            </div>

            <a href="#portfolio" className="primary-button">
              Conheça meu trabalho
            </a>
          </div>
        </section>

        <section className="about-section" id="sobre">
          <p className="section-label">UM POUCO SOBRE MIM</p>
          <h2>Sobre mim</h2>

          <p>
            Sou estudante de Desenvolvimento de Sistemas e estou construindo
            minha trajetória na área da tecnologia. Durante minha formação,
            tenho desenvolvido conhecimentos em programação, banco de dados,
            desenvolvimento web e outras áreas relacionadas à informática.
          </p>

          <p>
            Este portfólio reúne alguns dos projetos, atividades e
            conhecimentos adquiridos ao longo do curso.
          </p>
        </section>

        <section className="portfolio-section" id="portfolio">
          <p className="section-label">MEUS TRABALHOS</p>
          <h2>Portfólio</h2>

          <p>
            Aqui você encontra uma seleção dos meus estudos e projetos
            desenvolvidos durante o curso técnico.
          </p>

          <div className="portfolio-card">
            <h3>Desenvolvimento de Sistemas</h3>
            <p>
              Projetos e atividades envolvendo programação, tecnologia,
              desenvolvimento web e banco de dados.
            </p>
          </div>
        </section>

        <section className="subjects-section" id="disciplinas">
          <p className="section-label">MINHA FORMAÇÃO</p>
          <h2>Disciplinas</h2>

          <div className="subjects-grid">
            <article className="subject-card">
              <h3>Programação</h3>
              <p>Lógica de programação e desenvolvimento de aplicações.</p>
            </article>

            <article className="subject-card">
              <h3>Banco de Dados</h3>
              <p>Modelagem, organização e gerenciamento de dados.</p>
            </article>

            <article className="subject-card">
              <h3>Desenvolvimento Web</h3>
              <p>Criação de páginas e aplicações para a internet.</p>
            </article>

            <article className="subject-card">
              <h3>Engenharia de Software</h3>
              <p>Planejamento, organização e qualidade de projetos.</p>
            </article>
          </div>
        </section>

        <section className="activities-section" id="atividades">
          <p className="section-label">MINHA TRAJETÓRIA</p>
          <h2>Atividades acadêmicas</h2>

          <p>
            Acesse a página com as atividades e os materiais desenvolvidos
            durante minha formação.
          </p>

          <a
            href={`${import.meta.env.BASE_URL}atividades.html`}
            className="primary-button"
          >
            Ver atividades
          </a>
        </section>

        <section className="contact-section" id="contato">
          <p className="section-label">VAMOS NOS CONECTAR?</p>
          <h2>Contato</h2>

          <p>
            Você pode conhecer mais sobre meus projetos e acompanhar meu
            desenvolvimento por meio das plataformas abaixo.
          </p>

          <div className="contact-links">
            <a
              href="https://github.com/JuliaAlvsMr"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Júlia Alves Marçal. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
