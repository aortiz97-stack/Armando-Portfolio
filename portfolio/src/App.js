import './App.css';
import armandoImg from './images/armando_profile-modified.jpeg'

function App() {
  return (
    <div>
      <header>
        <img src={armandoImg} alt=""/>
        <h1>Armando Ortiz</h1>
        <p>Aspiring Full-Stack Developer</p>
      </header>
      <main>
        <section id="about-me">
          <h2>About Me</h2>
          <p>I am a self-taught programmer with skills in frontend design.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid-img-container">
            <div className="project">
              <div className="screenshot-container">Screenshot</div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Project Name</h3>
                  <div className="project-link-icons">Icons here</div>
                </div>
                <p>Short description</p>
              </div>
            </div>

            <div className="project">
              <div className="screenshot-container">Screenshot</div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Project Name</h3>
                  <div className="project-link-icons">Icons here</div>
                </div>
                <p>Short description</p>
              </div>
            </div>

            <div className="project">
              <div className="screenshot-container">Screenshot</div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Project Name</h3>
                  <div className="project-link-icons">Icons here</div>
                </div>
                <p>Short description</p>
              </div>
            </div>

            <div className="project">
              <div className="screenshot-container">Screenshot</div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Project Name</h3>
                  <div className="project-link-icons">Icons here</div>
                </div>
                <p>Short description</p>
              </div>
            </div>

            <div className="project">
              <div className="screenshot-container">Screenshot</div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Project Name</h3>
                  <div className="project-link-icons">Icons here</div>
                </div>
                <p>Short description</p>
              </div>
            </div>

            <div className="project">
              <div className="screenshot-container">Screenshot</div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Project Name</h3>
                  <div className="project-link-icons">Icons here</div>
                </div>
                <p>Short description</p>
              </div>
            </div>
          </div>

          

        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

/*<header>
          <div className="img-container"><img src={armandoImg} alt=""/></div>
          <h1>Armando Ortiz</h1>
          <p>Aspiring Full-Stack Developer</p>

      </header>
      <main>
        <section id="about-me">
          <div className="centering-container">
            <h2>About Me</h2>
          </div>
        </section>
      </main>*/
