import React from 'react';
import './Help.css';

class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showHelp: false};
        this.toggleHelp = this.toggleHelp.bind(this);
      }
    
      toggleHelp() {
        this.setState(state => ({
          showHelp: !state.showHelp
        }));
      }

      render() {
        return <div class="help">
          {this.state.showHelp ? 
            <span className="help-message">Psst! It's a secret! Launches May 2021.</span>
            : null}            
          <button className="help-button" onClick={this.toggleHelp}>
            ?
          </button>
        </div>
    }
}

export default Help;
