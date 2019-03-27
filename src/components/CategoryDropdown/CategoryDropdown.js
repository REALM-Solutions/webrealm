
import React from 'react';

class CategoryDropdown extends React.Component {
   constructor(props) {
      super(props); 
      this.state = {
         onChange: props.onChange
      }
   }


render() {
   return (
      <select className="categoryDropdown" onChange={this.state.onChange}>
         <option categoryType="sports">Sports</option>
         <option categoryType="study">Study</option>
         <option categoryType="games">Games</option>
         <option categoryType="entertainment">Entertainment</option>
         <option categoryType="casual">Casual</option>
         <option categoryType="miscelaneous">Miscelaneous</option>
      </select>
      
   );
}

}
export default CategoryDropdown;

