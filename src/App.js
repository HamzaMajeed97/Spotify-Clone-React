
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import MyAlbums from './components/MyAlbums';
import MySideNav from './components/MySideNav';
import MySongs from './components/MySongs';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <header >
    <Routes>
      <Route path='/' element={<MySideNav/>} />
      <Route  path='/nothing' element={<MySongs/>}  />
<Route path='/songs' element={<MyAlbums/>} />
    </Routes>
    </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
