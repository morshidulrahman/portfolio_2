
import { Header,Home,About,Blog,Contact,Testimonial,Portfolio,Pricing,Resume,Services} from "./app/components/sections/index";
import {Element} from 'react-scroll'
function App() {
  return (
      <div className="bg-[#F9F9FF] dark:bg-[#353353]">
            <Header/>
            <Element name="home" className="element md:h-screen h-auto">
             <Home/>
            </Element>
            <Element name="about" className="element md:h-screen h-auto">
            <About/>
            </Element>
            <Element name="services" className="element">
            <Services/>
            </Element>
            <Element name="resume" className="element">
            <Resume/>
            </Element>
            <Element name="portfolio" className="element">
            <Portfolio/>
            </Element>
            <div name="home" className="element">
            <Pricing/>
            </div>
            <div name="home" className="element">
            <Testimonial/>
            </div>
            <Element name="blogs" className="element md:h-screen h-auto">
            <Blog/>
            </Element>
            <Element name="contact" className="element ">
            <Contact/> 
            </Element>
      </div>
  );
}

export default App;

 