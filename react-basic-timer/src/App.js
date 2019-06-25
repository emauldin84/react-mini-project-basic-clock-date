import React, {Component} from 'react';
import './App.css';

import TimerInput from './components/TimerInput'
import Timer from './components/Timer'
import StartStopButton from './components/StartStopButton'

class App extends Component{
  state = {
    time: 0,
    displayInput: true,
  }

  handleInputChange = (e) => {
    this.setState({
      time: e.target.value
    })
  }

  handleStartTimer = () => {
    setInterval(() => {
      this.setState((prevState) => { 
        return {time: prevState.time - 1}
      })
    }, 1000)
  }
  
  handleStopTimer = () => {
    clearInterval(this.handleStartTimer)
  }

  render() {
    return (
      <div className="App">
          <h1>Timer</h1>
        <header className="App-header">
          <div className='container'>
  
            <div className='timeDisplay'>
              <p>Timer Display</p>
              <Timer time={this.state.time}/>

              <TimerInput
                time={this.state.time}
                show={this.state.displayInput}
                change={this.handleInputChange}/>
            </div>
            
            <div className='controls'>
              <div>start/stop button</div>
              <StartStopButton 
              start={this.handleStartTimer}
              stop={this.handleStopTimer}/>
              <div>reset button</div>
            </div>
  
          </div>
        </header>
      </div>
    );
  }

}

export default App;
