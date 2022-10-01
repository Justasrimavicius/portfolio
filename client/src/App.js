import { useEffect, useRef } from 'react';

// react components
import Footer from './Components/NavComponents/Footer';
import Header from './Components/NavComponents/Header';
import MainContent from './Components/MainContent';

// css files
import './Styles/footer.css';
import './Styles/header.css';
import './Styles/main.css';
import './Styles/effects.css';
import './Styles/aboutSct.css';
import './Styles/projectsSct.css';
import './Styles/contactSct.css';
// js files
import headerFade from './Animations/headerFade';

function App() {

    // refs for scrolling into the sections when header buttons are clicked
    const aboutMeSection = useRef(null);
    const myWorkSection = useRef(null);
    const contactMeSection = useRef(null);

  useEffect(()=>{
    headerFade(); // fades out/fades in the header
  },[])

  return (
    <div className="App">
      <Header refs={{aboutMeSection,myWorkSection,contactMeSection}}/>
        <MainContent refs={{aboutMeSection,myWorkSection,contactMeSection}}/>
      <Footer refs={{aboutMeSection,myWorkSection,contactMeSection}}/>
    </div>
  );
}

export default App;
