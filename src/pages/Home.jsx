
// import Services from "../components/Services";

import Contact from "../Components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../Components/Navbar";
import NeedCareToday from "../components/NeedCareToday ";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../Components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs;";
import Locations from "../components/Locations";




function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     <About></About>
     <Locations></Locations>
      <Services />
     
      <Testimonials></Testimonials>
      <Contact></Contact>
     
      <Footer></Footer>

    </>
  );
}

export default Home;