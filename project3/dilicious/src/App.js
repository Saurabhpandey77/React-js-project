import './App.css';
import Meal from './component/meal';
import Recipeinfo from './component/recipeinfo';
import './component/style.css';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (<>
    <Routes>
      <Route path='/' element={<Meal/>}/>
      <Route path='/:MealId' element={<Recipeinfo/>}/>
    </Routes>
    
    </>
  );
}

export default App;
