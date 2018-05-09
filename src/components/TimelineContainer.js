import React, {Component} from 'react';
import Timeline from './Timeline';
import MessageInput from './MessageInput';

const MESSAGES = [{
    username: 'cat2',
    message: 'first message',
    date: new Date(),
    id: 'e40c37c4-2530-4984-bf0b-71f9c39af46b'
  },{
    username: 'dog',
    message: 'second',
    date: new Date(),
    id: '279458f2-221f-44e9-b508-caa6f915e845'
  }];

export default class TimelineContainer extends Component {
  state = {messages: []}

  constructor(props){
    super(props);
    this.state = {
      messages: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({
      messages:MESSAGES
    })
  }

  handleSubmit(newMessage) {
    this.setState(function(){
      var messages = [newMessage].concat(this.state.messages.map(message => {
        return {
          id: message.id,
          username: message.username,
          message: message.message,
          date: message.date
        }
      }));
      
      return {
        messages: messages
      };
    })
  }

  render(){
    return (
      <div className='timeline-container'>
        <MessageInput onSubmit={this.handleSubmit}/>
        <Timeline messages={this.state.messages} />
      </div>
    );
  }
}
