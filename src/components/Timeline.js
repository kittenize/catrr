import React, {Component} from 'react';
import Message from './Message';

export default class Timeline extends Component {
  render(){
    const messages = this.props.messages.map((message) => {
      return (
        <Message key={message.id} username={message.username} message={message.message} id={message.id} date={message.date} />
      );
    });

    return (
      <div className='timeline-container'>
        {messages}
      </div>
    )
  }
}