import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Popular from './components/Foods/Popular';
import ProductsProvider from './context/ProductsProvider';
import Recommended from './components/Foods/Recommended';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div className='mx-auto sm:px-1 md:px-10 lg:px-40 xl:px-40'>
        <NavBar />
        <Header />
        <ProductsProvider>
          <Popular />
          <Recommended />
        </ProductsProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
