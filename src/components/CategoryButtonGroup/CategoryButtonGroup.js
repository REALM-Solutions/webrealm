
import React from 'react';
import checkboxes from '../Checkboxes/checkboxCategories';
import Checkbox from '../Checkboxes/Checkboxes';

class CategoryButtonGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }


    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
   
  }

  render() {
    return (
      <React.Fragment >
        {
          checkboxes.map(item => (
            <label className="checkBxLbl"  key={item.key}>
              {item.name}
              <Checkbox name={item.name}
                value={this.props.checkedItems}
                checked={this.state.checkedItems.get(item.name)}
                onChange={this.handleChange}  />
            </label>
          ))
        }
      </React.Fragment>
    );
  }
}

export default CategoryButtonGroup;

