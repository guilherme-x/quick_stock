import './App.css';
import Login from './login';
import ProductList from './products';
import Cadastro from './products/cadastro';

function App() {
  return (
    <div className="App">
      <Login />
      <ProductList />
      <Cadastro />
    </div>
  );
}

export default App;
