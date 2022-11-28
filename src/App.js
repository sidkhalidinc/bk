// import './App.css';
import { Routes, Route } from "react-router-dom";
import List from './pages/List/List';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/hotels' element={<List />} />
      </Routes>
    </>
  );
}

export default App;
