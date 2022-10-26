import logo from './logo.svg';
import './App.css';
import {HeaderWeb} from "./components/header/Header"
import {HeroSection} from "./components/heroSection/HeroSection"
import {FooterSection} from "./components/footer/Footer"
import {ContactSection} from "./components/contact/ContactSection"
function App() {
  return (
    <div className="App">
      <HeaderWeb/>
      <HeroSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
