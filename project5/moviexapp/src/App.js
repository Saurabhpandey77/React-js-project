import './App.css';
import './component/style.css';
import Main from './component/main';
import MovieInfo from './component/movieInfo1';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
  <><Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/:MoveID' element={<MovieInfo/>}/>
  </Routes>
  </>
  );
}

export default App;

