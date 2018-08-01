import React, {Component} from 'react';
import classes from './Spinner.css'
class Spinner extends Component {
  render()
  {
    return (
          <div className={classes.spinner}></div>
        // <div class="spinner"></div>
    )
  }
}
export default Spinner;