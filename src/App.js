// import logo from './logo.svg';
import './custom.scss';
import Header from './component/Header';
import Tabs from './component/Tabs';
import Product from './component/Product';
import ProductDetails from './component/ProductDetails';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
      <Header />
      <section className='content-section'>
        <div className='container'>
          <div className='content-section-inner'>
            <Tabs />
            <Product />
            <ProductDetails />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default App;
