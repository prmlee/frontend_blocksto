import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import Connection from './pages/Connection';
import Register from './pages/Register';
import Main from './pages/Main';
import Payment from './pages/Payment';

const App = () => {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
