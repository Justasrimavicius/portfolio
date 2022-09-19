import { useEffect } from 'react';

// react components
import Footer from './Components/NavComponents/Footer';
import Header from './Components/NavComponents/Header';
import MainContent from './Components/MainContent';

// css files
import './Styles/footer.css';
import './Styles/header.css';
import './Styles/main.css';
import './Styles/effects.css';

// js files
import headerFade from './Animations/headerFade';

function App() {

  useEffect(()=>{
    headerFade(); // fades out/fades in the header
    // MouseCursorEffect();
  },[])

  return (
    <div className="App">
      <Header />
        <MainContent />
      <Footer />
    </div>
  );
}

export default App;
