import Main from './pages/Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}

export default App;
