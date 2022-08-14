import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Route , Routes} from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/products/:id" caseSensitive={false} element={<Product />} />
        <Route path="/about" caseSensitive={false} element={<Home />} />
        <Route path="/contact" caseSensitive={false} element={<Home />} />
      </Routes>
      
    </>
  );
}

export default App;
