import LatestWorks from "./components/LatestWorks";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="bg-[#111] text-white font-['Nunito']">
      <HeroSection />
      <LatestWorks />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
}
