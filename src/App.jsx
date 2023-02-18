import './App.css'
import { Header } from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductList } from './components/ProductList'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <ProductList></ProductList>

    </div>
  )
}

export default App
