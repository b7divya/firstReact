import React, {useState} from 'react'
import Trialone from './components/Trialone/Trialone'
import Trialtwo from './components/Trialtwo/Trialtwo';
import Trialthreecubes from './components/Trialthreecubes/Trialthreecubes';
import Trialfour from './components/TrialfourSquare/TrialfourSquare';
import TrialfourSquare from './components/TrialfourSquare/TrialfourSquare';
import TrialFiveString from './components/TrialFiveString/TrialFiveString';
import TrialSix from './components/TrialSix/TrialSix';
import TrialSeven from './components/TrialSeven/TrialSeven';

function App() {

    

  return (
    <div>
    <Trialone />
    <Trialtwo  />
    <Trialthreecubes />
    <TrialfourSquare />
    <TrialFiveString />
    <TrialSix />
    <TrialSeven />
    </div>
    );
  }
  
export default App;
