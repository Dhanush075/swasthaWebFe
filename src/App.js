import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import SM from "./pages/products/SwasthaMedical/SM";
import SM1 from "./pages/products/SwasthaMedical/SM1";
import SM2 from "./pages/products/SwasthaMedical/SM2";
import SM3 from "./pages/products/SwasthaMedical/SM3";
import SM4 from "./pages/products/SwasthaMedical/SM4";
import SM5 from "./pages/products/SwasthaMedical/SM5";
import SM6 from "./pages/products/SwasthaMedical/SM6";
import SH from "./pages/products/SwasthaHospital/SH";
import SH1 from "./pages/products/SwasthaHospital/SH1";
import SH2 from "./pages/products/SwasthaHospital/SH2";
import SH3 from "./pages/products/SwasthaHospital/SH3";
import SS from "./pages/products/SwasthaStree/SS";
import SS1 from "./pages/products/SwasthaStree/SS1";
import SS2 from "./pages/products/SwasthaStree/SS2";
import SS3 from "./pages/products/SwasthaStree/SS3";
import SV from "./pages/products/SwasthaVahan/SV";
import SV1 from "./pages/products/SwasthaVahan/SV1";
import SV2 from "./pages/products/SwasthaVahan/SV2";
import SV3 from "./pages/products/SwasthaVahan/SV3";
import Press from "./pages/news/Press";
import Events from "./pages/news/Events";
import Navbar from "./components/Navbar";
import Faq from "./components/footer/faq/Faq";
import Rules from "./components/footer/rules/Rules";
import Privacy from "./components/footer/privacy/Privacy";
import Terms from "./components/footer/terms/Terms";
import TermsOfUse from "./components/footer/terms/TermsOfUse";
import Login from "./pages/LoginSignUp/Login";
import Register from "./pages/LoginSignUp/Register";
import Footer from "./components/footer/Footer";
import ProductCert from "./pages/SideNavbar/ProductCert/Cert";
import SidebarPage from "./pages/SideNavbar/SidebarPage";
import PDFViewer from "./pages/SideNavbar/Brochures/PDFViewer";
import Dist from "./pages/SideNavbar/Distributors/Dist";
import Profile from "./pages/SideNavbar/Profile/Profile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: "93px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/SM" element={<SM />} />
            <Route path="/SM1" element={<SM1 />} />
            <Route path="/SM2" element={<SM2 />} />
            <Route path="/SM3" element={<SM3 />} />
            <Route path="/SM4" element={<SM4 />} />
            <Route path="/SM5" element={<SM5 />} />
            <Route path="/SM6" element={<SM6 />} />
            <Route path="/SH" element={<SH />} />
            <Route path="/SH1" element={<SH1 />} />
            <Route path="/SH2" element={<SH2 />} />
            <Route path="/SH3" element={<SH3 />} />
            <Route path="/SS" element={<SS />} />
            <Route path="/SS1" element={<SS1 />} />
            <Route path="/SS2" element={<SS2 />} />
            <Route path="/SS3" element={<SS3 />} />
            <Route path="/SV" element={<SV />} />
            <Route path="/SV1" element={<SV1 />} />
            <Route path="/SV2" element={<SV2 />} />
            <Route path="/SV3" element={<SV3 />} />
            <Route path="/press" element={<Press />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/termsofuse" element={<TermsOfUse />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productcert" element={<ProductCert />} />
            <Route path="/sidebarpage" element={<SidebarPage />} />
            <Route path="/pdfviewer" element={<PDFViewer />} />
            <Route path="/dist" element={<Dist />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
