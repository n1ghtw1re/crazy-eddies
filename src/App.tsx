import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="deck-deals" element={<Products />} />
        <Route path="cyberdeck-chaos" element={<Blog />} />
        <Route path="about-eddie" element={<About />} />
        <Route path="find-the-hideout" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;