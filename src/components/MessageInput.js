import React, {Component} from 'react';
const uuid = require('uuid/v4');

export default class MessageInput extends Component {
    constructor(props){
      super(props);
      this.state = {
        username: '',
        message: ''
      }
  
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handleMessageChange = this.handleMessageChange.bind(this);
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleUsernameChange(event){
      const username = event.target.value;
      this.setState(function(){
        return {
          username: username,
          message: this.state.message
        };
      })
    }
  
    handleMessageChange(event){
      const message = event.target.value;
      this.setState(function(){
        return {
          username: this.state.username,
          message: message
        };
      })
    }
  
    handleSubmit(event) {
      event.preventDefault();
  
      this.props.onSubmit({
        username: this.state.username,
        message: this.state.message,
        date: new Date(),
        id: uuid()
      })
  
  
      this.setState({
        username: this.state.username,
        message: ''
      })

      this.messageInput.focus();
    }
    render(){
      var {username, message} = this.state;
      return (
        <form className='messageForm' onSubmit={this.handleSubmit}>
          <div className='messageInput'>
            <div className='row'>
              <label>Username: <input type='text' value={username} onChange={this.handleUsernameChange} /></label>
            </div>
            <div className='row'>
              <label>Message: <input ref={(input) => {this.messageInput = input;}}type='text' value={message} onChange={this.handleMessageChange}/></label>
            </div>
            <div className='row'>
              <button type='submit' disabled={(!username || !message)}>Submit</button>
            </div>
          </div>
        </form>
      )
    }
  }