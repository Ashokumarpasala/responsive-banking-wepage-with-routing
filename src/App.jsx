import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BankCard from './components/BankCard';

function App() {
  return (
    <>
   
     <Router>
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route exact path='/targetBank' element={<BankCard />}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
