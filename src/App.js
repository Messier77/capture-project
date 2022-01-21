// import pages
import AboutUs from "./pages/AboutUs";
// global style
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
// router
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/work/:id" exact element={<MovieDetail />} />
        <Route path="/contact" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
