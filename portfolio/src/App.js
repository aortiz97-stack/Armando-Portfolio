import './App.css';
import armandoImg from './images/armando_profile-modified.jpeg'

function App() {
  return (
    <div>
      <header>
        <div className="centering-container">
          <img src={armandoImg} alt=""/>
          <p>Armando Ortiz</p>
          <p>Aspiring Full-Stack Developer</p>
        </div>
      </header>

      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
