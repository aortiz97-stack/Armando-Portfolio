import './App.css';
import armandoImg from './images/armando_profile-modified.jpeg'
import shoppingCartImg from './images/shopping-cart-project.png';
import goToLink from './images/go-to-link.png';
import memoryCardImg from './images/Memory-Card-Game.png';
import calculatorImg from './images/calculator-project.png';
import ticTacToeImg from './images/tic-tac-toe.png';
import todoListImg from './images/todo-list-project.png';
import dashBoardProjectImg from './images/dashboard-project.png';

function App() {
  return (
    <div>
      <header>
        <div className="header-contents">
          <div className="profile-pic-container"><img src={armandoImg} alt=""/></div>
          <section id="about-me">
            <h1>Armando Ortiz</h1>
            <p>Aspiring Full-Stack Developer</p>
            <h2>About Me</h2>
            <p>I am a self-taught programmer with skills in frontend design.</p>
          </section>
        </div>
      </header>
      <main>
        <section id="projects">
          <h2>Projects</h2>
          <div className="grid-img-container">
            <div className="project">
              <div className="screenshot-container">
                <img src={shoppingCartImg} alt="" className="project-screenshot" />
              </div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Lemongrab's Online Shop</h3>
                  <div className="project-link-icons">
                    <button><a href='https://github.com/aortiz97-stack/Shopping-Cart' target='_blank' rel="noreferrer"><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt="GitHub" className="logo" /></a></button>
                    <button><a href="https://aortiz97-stack.github.io/Shopping-Cart/" target='_blank' rel="noreferrer"><img src={goToLink} alt="External link icon" className="logo" /></a></button>
                  </div>
                </div>
                <p className="project-description-text">Shopping cart app inspired by Adventure Time</p>
              </div>
            </div>

            <div className="project">
              <div className="screenshot-container">
                <img src={memoryCardImg} alt="" className="project-screenshot" />
              </div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Memory Card Game</h3>
                  <div className="project-link-icons">
                    <button><a href="https://github.com/aortiz97-stack/Memory-Card" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="logo" /></a></button>
                    <button><a href="https://aortiz97-stack.github.io/Memory-Card/" target='_blank' rel="noreferrer"><img src={goToLink} alt="External link icon" className="logo" /></a></button>
                  </div>
                </div>
                <p className="project-description-text">Memory card game that challenges you not to pick the same card</p>
              </div>
            </div>

            <div className="project">
              <div className="screenshot-container">
                <img src={calculatorImg} alt="" className="project-screenshot" />
              </div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Calculator App</h3>
                  <div className="project-link-icons">
                    <button><a href="https://github.com/aortiz97-stack/TODP-calculator" target='_blank' rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="logo" /></a></button>
                    <button><a href="https://aortiz97-stack.github.io/TODP-calculator/" target='_blank' rel="noreferrer"><img src={goToLink} alt="External link icon" className="logo" /></a></button>
                  </div>
                </div>
                <p className="project-description-text">Simple calculator with similar interface with iPhone calcualtor</p>
              </div>
            </div>

            <div className="project">
              <div className="screenshot-container">
                <img src={todoListImg} alt="" className="project-screenshot" />
              </div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Todo List App</h3>
                  <div className="project-link-icons">
                    <button><a href="https://github.com/aortiz97-stack/TODO-List-TODP" target='_blank' rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="logo" /></a></button>
                    <button><a href="https://aortiz97-stack.github.io/TODO-List-TODP/" target='_blank' rel="noreferrer"><img src={goToLink} alt="External link icon" className="logo" /></a></button>
                  </div>
                </div>
                <p className="project-description-text">Todo app that records to-do activities (backend coming soon)</p>
              </div>
            </div>

            <div className="project">
              <div className="screenshot-container">
                <img src={ticTacToeImg} alt="" className="project-screenshot" />
              </div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Tic-Tac-Toe Game</h3>
                  <div className="project-link-icons">
                    <button><a href="https://github.com/aortiz97-stack/Tic-Tac-Toe-TODP" target='_blank' rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="logo" /></a></button>
                    <button><a href="https://aortiz97-stack.github.io/Tic-Tac-Toe-TODP/" target='_blank' rel="noreferrer"><img src={goToLink} alt="External link icon" className="logo" /></a></button>
                  </div>
                </div>
                <p className="project-description-text">A simple game of Tic-Tac-Toe</p>
              </div>
            </div>

            <div className="project">
              <div className="screenshot-container">
                <img src={dashBoardProjectImg} alt="" className="project-screenshot" />
              </div>
              <div className="project-description-container">
                <div className="project-top-portion">
                  <h3>Dashboard</h3>
                  <div className="project-link-icons">
                    <button><a href="https://github.com/aortiz97-stack/Dashboard-TODP" target='_blank' rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="logo" /></a></button>
                    <button><a href="https://aortiz97-stack.github.io/Dashboard-TODP/" target='_blank' rel="noreferrer"><img src={goToLink} alt="External link icon" className="logo" /></a></button>
                  </div>
                </div>
                <p className="project-description-text">Frontend design of a dashboard page</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <h2>Contact Me</h2>
        <h3>Email</h3>
        <p>armando.ortiz.jr.19@outlook.com</p>
        <h3>Phone Number</h3>
        <p>346-284-4255</p>
        <h3>Social Media</h3>
        <div className="social-media-icons"></div>
      </footer>
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
