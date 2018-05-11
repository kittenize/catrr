import React, { Component } from 'react';
import ShortUniqueId from 'short-unique-id';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Card from './Card';
import {colors} from '../constants';

const uid = new ShortUniqueId();

const Row = glamorous.div({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '5px',
    boxSizing: 'border-box'
});

const UsernameLabel = glamorous.label({
    fontSize:'1em',
    paddingRight: '15px',
    backgroundColor: colors.medium,
    lineHeight: '2.2em',
    paddingLeft: '15px',
    color: colors.dark,
    width: '150px'
});

const MessageLabel = glamorous.div({
    fontSize:'1em',
    paddingRight: '15px',
    backgroundColor: colors.medium,
    lineHeight: '2.2em',
    paddingLeft: '15px',
    color: colors.dark,
    width: '100%',
    boxSizing: 'border-box'
});

const SubmitRow = glamorous.div({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    boxSizing: 'border-box'
});

const SubmitButton = glamorous.button({
    border: '0',
    padding: '.5rem',
    margin: '5px',
    backgroundColor: colors.dark,
    color: colors.light
});

export default class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'RandomCatrr',
            message: ''
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        const username = event.target.value;
        this.setState({
            username,
            message: this.state.message
        });
    }

    handleMessageChange(event) {
        const message = event.target.value;
        this.setState({
            username: this.state.username,
            message
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const newState = Object.assign(this.state, {
            date: (new Date()).getTime(),
            id: uid.randomUUID(6)
        });

        this.props.onSubmit(newState);

        this.setState({
            username: this.state.username,
            message: ''
        });

        this.messageInput.focus();
    }
    render() {
        var { username, message } = this.state;
        return (
            <Card header="Post Message">
                <form className='message-form' onSubmit={this.handleSubmit}>
                    <Row>
                        <UsernameLabel>Username</UsernameLabel> <glamorous.Input flexGrow='1' backgroundColor="#C0B496" padding=".5rem" border="0" width="100%" lineHeight="1.5" type='text' value={username} onChange={this.handleUsernameChange} placeholder="Name" />
                    </Row>
                    <MessageLabel>
                        Message
                    </MessageLabel>

                    <glamorous.Textarea boxSizing='border-box' placeholder="Type a message..." backgroundColor="#C0B496" padding=".5rem" border="0" width="100%" innerRef={(input) => { this.messageInput = input; }} type='text' value={message} onChange={this.handleMessageChange}></glamorous.Textarea>
                    
                    <SubmitRow>
                        <SubmitButton type="submit" disabled={(!username || !message)}>Submit</SubmitButton>
                    </SubmitRow>
                </form>
            </Card>
        );
    }
}

MessageInput.propTypes = {
    onSubmit: PropTypes.func
};