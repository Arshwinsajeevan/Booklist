import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BookList from './BookList';
import Fav from './Fav';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<BookList />}></Route>
          <Route path='/Fav' element={<Fav/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
