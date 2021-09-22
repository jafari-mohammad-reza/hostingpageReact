import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import PlansSection from "./Sections/PlansSection";
import InterduceSection from "./Sections/InterduceSection";
import GuidSection from "./Sections/GuidSection";
import SliderSection from "./Sections/Slider";
import ClientsIntroduce from "./Sections/ClientsInterduce";
import Footer from "../../Components/Footer";
function HomePage() {
  return (
    <div className={"overflow-x-hidden"}>
      <Navbar />
      <Header />
      <main>
        <InterduceSection />
        <GuidSection />
        <PlansSection />
        <SliderSection />
        <ClientsIntroduce />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
