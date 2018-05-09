import React, { Component } from 'react';
import Message from './Message';

export default class Timeline extends Component {
    render() {
        const messages = this.props.messages.map((message) => {
            let { ...props } = Object.assign({ key: message.id }, message);

            return (
                <Message {...props} />
            );
        });

        return (
            <div className='timeline-container'>
                {messages}
            </div>
        )
    }
}