
import React from 'react';

class CategoryDropdown extends React.Component {
   constructor(props) {
      super(props); 
   }


render() {
   return (
      <select className="categoryDropdown">
         <option selectedCategory="sports">Sports</option>
         <option selectedCategory="study">Study</option>
         <option selectedCategory="games">Games</option>
         <option selectedCategory="entertainment">Entertainment</option>
         <option selectedCategory="casual">Casual</option>
         <option selectedCategory="miscelaneous">Miscelaneous</option>
      </select>
      
   );
}

}
export default CategoryDropdown;

