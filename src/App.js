import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupBanner from "./components/Notifications";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import FindAPret from "./pages/FindAPret";
import ClubPret from "./pages/ClubPret";
import Jobs from "./pages/Jobs";
import Platters from "./pages/Platters";
import PretPerks from "./pages/PretPerks";
import OrderOnline from "./pages/OrderOnline";
import Footer from "./components/Footer";
import OurShops from "./pages/OurShops";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SuperPlates from "./pages/SuperPlates";
import OrderNow from "./pages/OrderNow";
import Products from "./pages/Products";
import OrderYourUnusual from "./pages/OrderYourUnusual";
import Handmade from "./pages/Handmade";
import SoupRota from "./pages/SoupRota";
import AllergenGuide from "./pages/AllergenGuide";
import Shop from "./pages/Shop";
import { FooterAccordion } from "./components/Footer/FooterAccordion";
import Butternut from "./pages/Butternut";
import Chipotle from "./pages/Chipotle";
import Shawarma from "./pages/Shawarma";
import MisoSalmon from "./pages/MisoSalmon";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <SignupBanner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/find-a-pret" element={<FindAPret />} />
        <Route path="/club-pret" element={<ClubPret />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/platters" element={<Platters />} />
        <Route path="/pret-perks" element={<PretPerks />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/life-in-our-shops" element={<OurShops />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="/super-plates" element={<SuperPlates />} />
        <Route path="/products" element={<Products />} />
        <Route path="/handmade" element={<Handmade />} />
        <Route path="/soup-rota" element={<SoupRota />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shawarma-chicken" element={<Shawarma />} />
        <Route path="/miso-salmon" element={<MisoSalmon />} />
        <Route path="/chipotle-chicken" element={<Chipotle />} />
        <Route path="/butternut-meze" element={<Butternut />} />
        <Route path="/allergenguide" element={<AllergenGuide />} />
        <Route path="/order-your-unusual" element={<OrderYourUnusual />} />
        <Route path="/order-your-unusual" element={<OrderYourUnusual />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <FooterAccordion />
      <Footer />
    </Router>
  );
}

export default App;

