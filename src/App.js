
import { Header,Home,About,Blog,Contact,Testimonial,Portfolio,Pricing,Resume,Services} from "./app/components/sections/index";
import {Element} from 'react-scroll'
function App() {
  return (
      <div className="bg-[#F9F9FF] dark:bg-[#353353]">
            <Header/>
            <Element name="home" className="element h-screen">
             <Home/>
            </Element>
            <Element name="about" className="element h-screen">
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
            {/* <div name="home" className="element">
            <Pricing/>
            </div>
            <div name="home" className="element">
            <Testimonial/>
            </div> */}
            <Element name="blogs" className="element">
            <Blog/>
            </Element>
            <Element name="contact" className="element h-screen">
            <Contact/> 
            </Element>
      </div>
  );
}

export default App;


{/* <About/>
<Services/>
<Resume/>
<Portfolio/>
<Pricing/>
<Testimonial/>
<Blog/>
<Contact/> */}