import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import { useEffect } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import Alert from "./components/Alert";
import { useSelector } from "react-redux";

function App() {
  const alert = useSelector((state) => state.alert);
  useEffect(() => {
    document.body.style.backgroundColor = "#181414";
    document.title = `Home - Muhammad Arham`;
  }, []);
  return (
    <>
      <Navbar />
      {alert.visible && <Alert />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
