import './App.css'
import { Header } from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductList } from './components/ProductList'
import { useEffect, useState } from 'react';
import { FilterAside } from './components/FilterAside';
import { Footer } from './components/Footer';
import productAPI from './src/services/productAPI.js';


function App() {
  // Fetching productAPI.js data
  const [productList, setProductList] = useState([]);

  async function fetchProduct() {
    const response = await fetch(productAPI);
    setProductList(await response.json());
  }

  useEffect(() => { fetchProduct() }, []);

  // Handle searchbar input value
  const [searchValue, setSearchValue] = useState('');

  // Handle category clicked
  const [categorySelected, setCategorySelected] = useState('');

  const handleCategoryClick = categoryBtn => {
    const categoryTitle = categoryBtn.target.title;
    setCategorySelected(categoryTitle);
  }

  // Handle price interval
  const PRICE_MIN_DEFAULT = 0;
  const PRICE_MAX_DEFAULT = 9999;

  const [priceMin, setPriceMin] = useState(PRICE_MIN_DEFAULT);
  const [priceMax, setPriceMax] = useState(PRICE_MAX_DEFAULT);

  // Handle state abbreviation
  const [stateAbbreviaton, setStateAbbreviaton] = useState('');

  return (
    <div className="App">
      <Header setSearchValue={setSearchValue} />
      <main className='d-flex flex-column flex-sm-row justify-content-around align-items-sm-center my-3'>
        <FilterAside categorySelected={categorySelected} handleCategoryClick={handleCategoryClick} PRICE_MIN_DEFAULT={PRICE_MIN_DEFAULT} PRICE_MAX_DEFAULT={PRICE_MAX_DEFAULT} priceMin={priceMin} priceMax={priceMax} setPriceMin={setPriceMin} setPriceMax={setPriceMax} stateAbbreviaton={stateAbbreviaton} setStateAbbreviaton={setStateAbbreviaton}></FilterAside>

        <ProductList searchValue={searchValue} categorySelected={categorySelected} productList={productList} priceMin={priceMin} priceMax={priceMax} stateAbbreviaton={stateAbbreviaton}></ProductList>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default App
