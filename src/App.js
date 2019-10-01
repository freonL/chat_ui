import React from 'react';
// import logo from './logo.svg';
import './App.css';

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
]

const Title = () => {
  return <h1>Chat App</h1>
}

class MsgList extends React.Component {
  render () {
    return (
      <ul className="msg-list">{
        this.props.messages.map((msg,i) => {
          return (
            <li key={i}>
              <div>
                {msg.senderId}
              </div>
              <div>
                {msg.text}
              </div>
            </li>
          )
        })
      }</ul>
    );
  }
}

class MsgForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert("hello");
    event.preventDefault();
    this.props.sendMessage(this.state.value)
    this.setState({value: ""});
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} ></input>
        <input type="submit" value="Send" ></input>
      </form>
    )
  }
}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: DUMMY_DATA
    }

    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage (msg) {
    // this.setState({
    //   messages: []
    // })
    DUMMY_DATA.push({
      senderId: "perborgen",
      text: msg
    })

    this.setState({
      messages: DUMMY_DATA
    })
  }

  render () {
    return (
      <div className="chatApp">
        <Title />
        <MsgList messages={this.state.messages}/>
        <MsgForm sendMessage={this.sendMessage}/>
      </div>
    )
  }
}



export default App;
