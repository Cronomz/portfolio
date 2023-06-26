import './App.css';
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import ScrambleText from './components/scrambleText';
import Earth from './components/earth';
import { Environment } from '@react-three/drei';

function App() {

  return (
    <div className="App" style={{backgroundColor: 'black', minHeight: '100vh'}}>
      <div style={{position: 'fixed', zIndex: 0}}>
        <Canvas style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
          {/* <Environment preset="sunset" background /> */}
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Earth position={[-1.2, 0, 0]} />
        </Canvas>
      </div>
      {/* <div style={{position: 'absolute', width: '100vw', height: '100vh'}}>
        <div style={{position: 'fixed', top: '550px', left: 'calc(-50vw)', clipPath: "circle(1000px)", height: '2000px', width: '2000px', backgroundColor: 'red'}}>
          
        </div>
        <div style={{position: 'relative', clipPath: "circle(100px)", height: '200px', width: '200px', backgroundColor: 'yellow'}}>
          
        </div>
      </div> */}
      <div style={{zIndex: 1, position: 'fixed'}}>
        <ScrambleText 
            text="Kris Natanael Prawiro"
            style={{fontFamily: 'Researcher', letterSpacing:'-5px', fontSize: '50px', width: 'max-content'}}
            delay={0} 
            scrambledTimes={40}
            primaryColor={'#00ff00'} 
            secondaryColor={'#00ff00'}
            appearAll={false}
            onHover={true}>
          KRIS NATANAEL PRAWIRO
        </ScrambleText>
        <ScrambleText 
            text="Frontend Engineer"
            style={{fontFamily: 'Researcher', letterSpacing:'-5px', fontSize: '50px', width: 'max-content'}}
            delay={0} 
            scrambledTimes={40} 
            primaryColor={'#00ff00'} 
            secondaryColor={'#00ff00'}
            appearAll={false}
            onHover={true}>
          FRONTEND ENGINEER
        </ScrambleText>
      </div>
    </div>
  );
}

export default App;
