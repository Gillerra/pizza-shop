import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';


function App() {
  return (
    <div>
      
          <AllCategories />

      <div className='block'>

      <div className='cart'>
      <Cart />
      </div>

      <div className='dishes'>
      <Dishes />
      </div>
      
      </div>
      
    </div>
  );
}

export default App;
