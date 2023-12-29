import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navsec from './Components/Navsec';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Team from './Components/Team';
import Footersec from './Components/Footersec';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Sliderdec from './Components/Sliderdec'
import Timeline from './Components/Timeline';
import Preloader from './Components/Preloader';


function App() {
  return (
    <>
      <Preloader/>
      <Navsec />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Timeline />
      <Sliderdec />
      <Team />
      <Footersec />
    </>
  );
}

export default App;
