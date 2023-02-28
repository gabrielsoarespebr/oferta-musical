import './App.css'
import { Header } from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductList } from './components/ProductList'
import { useEffect, useState } from 'react';
import { FilterAside } from './components/FilterAside';
import { Footer } from './components/Footer';


function App() {
  // Fetching productAPI.js data
  const [productList, setProductList] = useState([]);

  async function fetchProduct() {
    const response = await fetch("src/services/productAPI.js");
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
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(30000);

  // Handle state abbreviation
  const [stateAbbreviaton, setStateAbbreviaton] = useState('');

  return (
    <div className="App">
      <Header setSearchValue={setSearchValue} />
      <main className='d-flex justify-content-around my-3'>
        <FilterAside handleCategoryClick={handleCategoryClick} setPriceMin={setPriceMin} setPriceMax={setPriceMax} setStateAbbreviaton={setStateAbbreviaton}></FilterAside>

        <ProductList searchValue={searchValue} categorySelected={categorySelected} productList={productList} priceMin={priceMin} priceMax={priceMax} stateAbbreviaton={stateAbbreviaton}></ProductList>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default App
