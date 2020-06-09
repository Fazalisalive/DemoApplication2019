import React from 'react';
import Diner from './Dinner.js'

function App() {
  return (
     <div>
     <Diner dishName="Biryani" sweetDish="Kheer" />
     <hr/>
     <Diner dishName="Biryani" sweetDish="Kheer" />
     <hr/>
     <Diner dishName="Biryani" sweetDish="Kheer" />
     <hr/>
     </div>
  );
}

export default App;
