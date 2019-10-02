import React from 'react';
// import logo from './logo.svg';
import './App.css';

var now = new Date();

const DUMMY_DATA = [
  {
    senderId: "Alice",
    timestamp: now.toLocaleDateString(undefined,  {
      day : 'numeric',
      month : 'short',
      year : 'numeric',
      hour : 'numeric',
      minute : 'numeric',

    }),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    senderId: "Bob",
    timestamp: now.toLocaleDateString(undefined, {
      day : 'numeric',
      month : 'short',
      year : 'numeric',
      hour : 'numeric',
      minute : 'numeric',
    }),
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    senderId: "Alice",
    timestamp: now.toLocaleDateString(undefined,  {
      day : 'numeric',
      month : 'short',
      year : 'numeric',
      hour : 'numeric',
      minute : 'numeric',

    }),
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
  },
  {
    senderId: "Bob",
    timestamp: now.toLocaleDateString(undefined, {
      day : 'numeric',
      month : 'short',
      year : 'numeric',
      hour : 'numeric',
      minute : 'numeric',
    }),
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
    senderId: "Alice",
    timestamp: now.toLocaleDateString(undefined,  {
      day : 'numeric',
      month : 'short',
      year : 'numeric',
      hour : 'numeric',
      minute : 'numeric',

    }),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    senderId: "Bob",
    timestamp: now.toLocaleDateString(undefined, {
      day : 'numeric',
      month : 'short',
      year : 'numeric',
      hour : 'numeric',
      minute : 'numeric',
    }),
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  },
  {
    senderId: "Alice",
    timestamp: now.toLocaleDateString(undefined,  {
      day : 'numeric',
      month : 'short',
      year : 'numeric',
      hour : 'numeric',
      minute : 'numeric',

    }),
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
  },
  {
    senderId: "Bob",
    timestamp: now.toLocaleDateString(undefined, {
      day : 'numeric',
      month : 'short',
      year : 'numeric',
      hour : 'numeric',
      minute : 'numeric',
    }),
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
]

const Title = () => {
  return <h1>Chat App</h1>
}

class MsgList extends React.Component {
  render () {
    return (
      <ul className="msg-list">{
        this.props.messages.map((msg,i) => {
          let cls = "";

          if (msg.senderId === "Alice") {
            cls = "bubble-left";
          } else {
            cls = "bubble-right";
          }

          return (
            <li key={i} className={cls}>
              <div>
                <p>{msg.senderId}</p>
                <p>{msg.timestamp}</p>
                <p>{msg.text}</p>
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
    this.state = { usr: 'Alice', txt: ''};
    this.handleChange_txt = this.handleChange_txt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange_txt(event) {
    this.setState({
      txt: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendMessage(this.state);
    (this.state.usr === "Alice") ? this.setState({usr: 'Bob'}) : this.setState({usr: 'Alice'});
    this.setState({txt: ""})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.txt} name="txt" id="txt" onChange={this.handleChange_txt} ></input>
        <input type="submit" id="sbm" value="Send" ></input>
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
    var now = new Date();
    DUMMY_DATA.push({
      senderId: msg.usr,
      text: msg.txt,
      timestamp: now.toLocaleDateString(undefined, {
        day : 'numeric',
        month : 'short',
        year : 'numeric',
        hour : 'numeric',
        minute : 'numeric',
      }),
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
