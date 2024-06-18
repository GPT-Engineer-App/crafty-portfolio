import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Blog from "./pages/Blog.jsx";
import Work from "./pages/Work.jsx";
import Design from "./pages/Design.jsx";
import WebDevelopment from "./pages/WebDevelopment.jsx";
import Photography from "./pages/Photography.jsx";
import Music from "./pages/Music.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/design" element={<Design />} />
          <Route path="/work/web-development" element={<WebDevelopment />} />
          <Route path="/work/photography" element={<Photography />} />
          <Route path="/work/music" element={<Music />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
