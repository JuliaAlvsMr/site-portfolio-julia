import "./styles.css";

function App() {
  return (
    <div className="site">
      {/* ==================== CABEÇALHO ==================== */}
      <header className="header">
        <div className="header-content">
          <p className="header-small">PORTFÓLIO ACADÊMICO</p>

          <h1>Júlia Alves Marçal</h1>

          <p className="header-subtitle">
            Desenvolvimento de Sistemas
          </p>
        </div>

        {/* Botão do menu */}
        <div className="header-controls">
          <button
            className="menu-button"
            aria-label="Abrir menu"
            onClick={() =>
              document
                .querySelector(".nav-menu")
                .classList.toggle("menu-open")
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Navegação */}
        <nav className="nav-menu">
          <a href="#inicio">Início</a>
          <a href="#quem-sou">Quem eu sou</a>
          <a href="#portfolio">O que é o portfólio</a>
          <a href="#materias">Matérias</a>
          <a href="#atividades">Atividades</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* ==================== CONTEÚDO PRINCIPAL ==================== */}
      <main id="inicio" className="main-content">

        {/* ==================== PERFIL ==================== */}
        <section className="hero-card content-card">
          <div className="profile-area">

            {/* Foto */}
            <div className="profile-image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Foto de perfil de Júlia Alves Marçal"
                className="profile-image"
              />
            </div>

            {/* Informações */}
            <div className="profile-text">
              <span className="section-label">
                ESTUDANTE
              </span>

              <h2>Júlia Alves Marçal</h2>

              <p className="profile-description">
                Estudante do 3º ano do Ensino Médio e do curso
                Técnico em Desenvolvimento de Sistemas.
              </p>

              <div className="profile-info">

                <div>
                  <span>Número</span>
                  <strong>17</strong>
                </div>

                <div>
                  <span>Turma</span>
                  <strong>3º B</strong>
                </div>

                <div>
                  <span>Curso</span>
                  <strong>Desenvolvimento de Sistemas</strong>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ==================== QUEM EU SOU ==================== */}
        <section
          id="quem-sou"
          className="content-card reveal"
        >
          <span className="section-label">
            QUEM EU SOU
          </span>

          <h2>Sobre mim</h2>

          <p>
            Olá! Meu nome é Júlia Alves Marçal, sou estudante
            do 3º ano do Ensino Médio e do curso Técnico em
            Desenvolvimento de Sistemas.
          </p>

          <p>
            Este portfólio reúne um pouco dos meus projetos,
            atividades e aprendizados ao longo da minha formação.
          </p>
        </section>

        {/* ==================== O QUE É O PORTFÓLIO ==================== */}
        <section
          id="portfolio"
          className="content-card reveal"
        >
          <span className="section-label">
            PORTFÓLIO
          </span>

          <h2>O que é este portfólio?</h2>

          <p>
            Este espaço foi criado para reunir e apresentar
            as atividades desenvolvidas durante minha formação
            acadêmica e técnica.
          </p>

          <p>
            Aqui estão organizados meus registros, projetos,
            experiências e aprendizados de forma simples e
            organizada.
          </p>
        </section>

        {/* ==================== MATÉRIAS ==================== */}
        <section
          id="materias"
          className="content-card reveal"
        >
          <span className="section-label">
            FORMAÇÃO
          </span>

          <h2>Minhas matérias</h2>

          <div className="subjects-grid">

            {/* Matéria 1 */}
            <article className="subject-card">
              <h3>
                Desenvolvimento de Sistemas
              </h3>

              <p>
                Conteúdos relacionados à criação,
                desenvolvimento e organização de sistemas.
              </p>
            </article>

            {/* Matéria 2 */}
            <article className="subject-card">
              <h3>
                Programação
              </h3>

              <p>
                Aprendizados sobre lógica, linguagens de
                programação e desenvolvimento de aplicações.
              </p>
            </article>

            {/* Matéria 3 */}
            <article className="subject-card">
              <h3>
                Banco de Dados
              </h3>

              <p>
                Conceitos de armazenamento, organização e
                gerenciamento de dados.
              </p>
            </article>

            {/* Matéria 4 */}
            <article className="subject-card">
              <h3>
                Desenvolvimento Web
              </h3>

              <p>
                Criação de páginas e aplicações utilizando
                tecnologias da web.
              </p>
            </article>

          </div>
        </section>

        {/* ==================== ATIVIDADES ==================== */}
        <section
          id="atividades"
          className="content-card reveal"
        >
          <span className="section-label">
            REGISTROS
          </span>

          <h2>Atividades acadêmicas</h2>

          <p>
            Confira todas as atividades desenvolvidas durante
            minha formação, organizadas por semestre,
            bimestre, matéria e semana.
          </p>

          <a
            href={`${import.meta.env.BASE_URL}atividades.html`}
            className="main-button"
          >
            Ver atividades
            <span>↗</span>
          </a>
        </section>

        {/* ==================== CONTATO ==================== */}
        <section
          id="contato"
          className="content-card reveal"
        >
          <span className="section-label">
            CONTATO
          </span>

          <h2>Onde me encontrar</h2>

          <p>
            Confira meus perfis profissionais e projetos
            desenvolvidos.
          </p>

          <div className="contact-links">

            {/* GitHub */}
            <a
              href="https://github.com/JuliaAlvsMr"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">
                GH
              </span>

              <div>
                <strong>GitHub</strong>
                <small>Meus projetos</small>
              </div>

              <span>↗</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/julia-alves-bb74752a2/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">
                in
              </span>

              <div>
                <strong>LinkedIn</strong>
                <small>Meu perfil profissional</small>
              </div>

              <span>↗</span>
            </a>

          </div>
        </section>

      </main>

      {/* ==================== RODAPÉ ==================== */}
      <footer className="footer">
        <p>
          Portfólio Acadêmico • Júlia Alves Marçal
        </p>

        <span>
          © 2026
        </span>
      </footer>
    </div>
  );
}

export default App;