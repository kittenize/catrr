import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ShortUniqueId from 'short-unique-id';

const uid = new ShortUniqueId();


export default class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: ''
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        const username = event.target.value;
        this.setState(function () {
            return {
                username: username,
                message: this.state.message
            };
        })
    }

    handleMessageChange(event) {
        const message = event.target.value;
        this.setState(function () {
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
            id: uid.randomUUID(6)
        })


        this.setState({
            username: this.state.username,
            message: ''
        })

        this.messageInput.focus();
    }
    render() {
        var { username, message } = this.state;
        return (
            <form className='message-form' onSubmit={this.handleSubmit}>
                <div className='message-input'>
                    <Row>
                        <Col xs={12}>
                            <label className='message-input-label'>Username: <input className='message-input-username form-control' type='text' value={username} onChange={this.handleUsernameChange} /></label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label className='message-input-label'>Message:
                  <textarea className='message-input-text-area form-control' ref={(input) => { this.messageInput = input; }} type='text' value={message} onChange={this.handleMessageChange}></textarea>
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Button bsStyle="primary" type="submit" disabled={(!username || !message)}>Submit</Button>
                        </Col>
                    </Row>
                </div>
            </form>
        )
    }
}