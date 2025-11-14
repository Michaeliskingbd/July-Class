import Category from "../components/Category";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import { useUser } from "../context/UserContext";

const Home = () => {
  const { user } = useUser();

  // if (!user) return <p>Not logged in</p>;
  return (
    <section>
      <HeroSection />
      <Category />
      <Features />
      <Testimonials />
      <Footer />
    </section>
  );
};

export default Home;

//useState
