
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from './Header'
import Main from './Main'
import About from './About';
import Stadium from './Stadium'
import Academy from './Academy';
import Championship from './Championship';
import Video from './Video';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {

  return (
    <div>
      <Header></Header>
      <Main></Main>
      <About></About>
      <Stadium></Stadium>
      <Academy></Academy>
      <Championship></Championship>
      <Video></Video>
      <Contact></Contact>
      <Footer></Footer>
      
      <button className="arrow-top">
        <i className="iconsax" icon-name="arrow-up"></i>
      </button>
    </div>
  )
}
