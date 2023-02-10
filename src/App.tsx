import Main from './pages/Main';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Give from './pages/Give';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/give' element={<Give />} />
    </Routes>
  );
}

export default App;
