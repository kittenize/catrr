import React, {Component} from 'react';

export default class Message extends Component {
    render(){
        return (
        <div className='message'>
            <div className='row'>
            <span className='username'>{this.props.username}</span> <span className='date'>{this.props.date.toLocaleTimeString()}</span>
            </div>
            <div className='row'>
            {this.props.message}
            </div>
            <div className='row'>
            <span className='uuid'>{this.props.id}</span>
            </div>
        </div>
        )
    }
}