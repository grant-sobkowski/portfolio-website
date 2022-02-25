import logo from './logo.svg';
import './App.scss';
import React from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';

class App extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current
    });
  }
  componentWillUnmount() {
    if(this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <div className="App">

         <section className="section intro" ref={this.vantaRef}>
           <h1 className="intro-title">Hi, I'm Grant</h1>
           <span className="intro-occupation">Full-Stack Web Developer</span>
         </section>

         <section className="section what">
         <div className="divider">
            <div className="div-one"></div>
            <div className="div-two"></div>
          </div>
          {/* <h2 className="sub-heading sub-heading-what">What I Do</h2> */}
           <div className='container what-container'>
            <div className="headshot-container">
              <div className='headshot'></div>
            </div>
            <h2 className="what-slogan">An adaptable problem solver bringing creativity to the table.</h2>
            <p className="body-text about-me">
              First and foremost a problem-solver, I've always loved the way software engineering can 
              marry functionality and puzzle breaking. Although my tenure in web development is relatively short, 
              I've discovered ways to bring my own fresh perspective into the field.
            </p>
            <div className='what-skills'>
              <div className='skill webdev'></div>
              <div className='skill ui-design'></div>
            </div>
          </div>
         </section>
           
         <section className="section portfolio">
          <h1 className="sub-heading sub-heading-portfolio">Portfolio</h1>
          <div className="divider">
            <div className="div-one"></div>
            <div className="div-two"></div>
          </div>
          <div className='project ant-simulation'>
            <div className='project-title'>Ant Simulation</div>
            <div className='project-picture antsim-picture'></div>
            <div className='project-description body-text'>
              In pursuit of modeling ant behavior with Phaser.JS, this project uses data structures - specifically linked lists - to represent ant pheromone paths.
              Enapsulating the project is a time-betting mechanic which allows the player to compete against others. Once finished with the game, the app
              makes a call to a MongoDB server using Express.JS to create the leaderboard.  
            </div>
            <div className='project-link-container'>
            <form action="https://ant-game.herokuapp.com/">
              <input type="submit" value="Launch" className='project-link'/>
            </form>
            </div>
          </div>
         </section>
         <div className='project climateflight'>
            <div className='project-title climateflight-title'>ClimateFlight</div>
            <div className='project-picture climateflight-picture'></div>
            <div className='project-description body-text climateflight-body'>
              Using the TravelPayouts API, ClimateFlight returns each user flights ranked by their respective carbon emissions. ClimateFlight's backend is powered by PHP and Yii2,
              while the frontend uses AngularJS. This project emphasizes navigating around existing API's and outputting the results in a user-friendly manner. 
            </div>

            <div className='project-link-container'>
              <form action="https://github.com/grant-sobkowski/ClimateFlight2">
                <input type="submit" value="Repo" className='project-link'/>
              </form>
            </div>
          </div>
          <div className='bottom-info'>
          <div className="divider-white">
            <div className="div-one-white"></div>
            <div className="div-two-white"></div>
          </div>
            <p className='bottom-email'>grant.sobkowski@gmail.com</p>
            <p className='copyright'>© 2022 Grant Sokowski</p>
          </div>
      </div>
    );
  }
}

export default App;
