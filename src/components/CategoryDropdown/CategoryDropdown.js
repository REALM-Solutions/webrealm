
import React from 'react';

class CategoryDropdown extends React.Component {
   constructor(props) {
      super(props); 
   }


render() {
   return (
      <select className="categoryDropdown" ref='categoryType'  value={this.state.fields["categoryType"]} >
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

