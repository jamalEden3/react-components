import Header from "../Header";
import Footer from "../Footer";
import FrontPage from "../../pages/FrontPage";
import About from "../../pages/About";
import NotFound from "../../pages/NotFound";
import { GlobalStyle } from '../../styles/gobal.style';
import { Routes, Route } from "react-router-dom";

function App() {
    return (
      <>
        <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={ <FrontPage /> } />
            <Route path="about" element={ <About /> } />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
      </>
    );
  }
  export default App;