import './App.css'
import { Header } from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductList } from './components/ProductList'
import { useState } from 'react';


function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <Header setSearchValue={setSearchValue} />
      <ProductList searchValue={searchValue}></ProductList>

    </div>
  )
}

export default App
