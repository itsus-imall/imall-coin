import Main from './pages/Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Give from './pages/Give';
import Admin from './pages/Admin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/give' element={<Give />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}

export default App;
