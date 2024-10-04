import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import { Modal } from './components/Modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Provider store={store}>
          <AddProduct />
          <ProductList />
          <Modal />
        </Provider>

      </header>
    </div>
  );
}

export default App;
