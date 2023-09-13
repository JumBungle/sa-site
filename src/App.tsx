import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/Carousel.css";
import "./components/Projects.css";
import "./components/Gallery.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectPage from "./components/ProjectPage";
import WorkIndex from "./pages/WorkIndex";
import NoMatch from "./pages/NoMatch";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />}>
          <Route index element={<WorkIndex />} />
          <Route path=":project" element={<ProjectPage />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
