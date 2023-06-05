import Image from 'next/image';
import styles from './page.module.css';
import Header from './components/Menu/Header';
import Home from './components/Menu/Home';
import About from './components/Menu/About'; 
import Portfolio from './components/Menu/Portfolio';
import Footer from './components/Menu/Footer'
function page(){
  return(
    <div>
      <Header/>
      <Home/>
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}
export default page;
