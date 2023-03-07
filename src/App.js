import { Route, Routes } from 'react-router-dom';
import './styles.css';
import Home from './pages/Home';
import Catalog from './pages/Сatalog'
import NotFound from './pages/NotFound';


function App() {
  return (
    <div>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
