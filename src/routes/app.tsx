import Menu from "@/components/templates/menu/menu";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Home from "@/pages/home";
import Offer from "@/pages/offer";
import Rooms from "@/pages/rooms";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Menu />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
