import './HeaderStyle.css'
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';

function Header() {
  return (
    <header>
    <Navbar  
      brand = "Starter" 
      get = "GetHub" 
      Logein = "Sign in"
      Icon = "fa-solid fa-blog"
    />
    <Hero
    title = "The modern landing page for"
    span = "React developer"
    dec = "The easiest way to build React landing page in seconds."
    btn = "Download Your Free Version"
    />
    </header>
  );
}

export default Header;
