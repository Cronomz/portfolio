import './App.css';
import ScrambleText from './components/scrambleText';

function App() {
  return (
    <div className="App">
      <ScrambleText 
          text="KRIS NATANAEL PRAWIRO"
          style={{fontSize: '50px'}}
          delay={0} 
          scrambledTimes={40} 
          primaryColor={'black'} 
          secondaryColor={'red'}
          appearAll={true}
          onHover={true}>
        KRIS NATANAEL PRAWIRO
      </ScrambleText>
    </div>
  );
}

export default App;
