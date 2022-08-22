import Header from "../Header";
import Footer from "../Footer";
import FrontPage from "../../pages/FrontPage";
import About from "../../pages/About";
import NotFound from "../../pages/NotFound";
import { GlobalStyle } from '../../styles/gobal.style';
import { Routes, Route } from "react-router-dom";
import Form from "../Form";
import Navigation from "../Navigation";

function App() {
    return (
      <>
        <GlobalStyle />
          {/* <Header /> */}
          <Navigation />
          <Routes>
            <Route path="/" element={ <FrontPage /> } />
            <Route path="about" element={ <About /> } />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>
          <Footer />
      </>
    );
  }
  export default App;