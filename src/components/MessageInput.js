import React, { Component } from 'react';
import ShortUniqueId from 'short-unique-id';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const uid = new ShortUniqueId();

const Container = glamorous.div({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)',
    transition: '0.3s',
    textAlign: 'left',
    padding: '2px 16px',
    margin: '15px',
    borderRadius: '5px',
});

const Row = glamorous.div({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px'
});

const Label = glamorous.label({
    fontWeight: 'bold'
});

const SubmitRow = glamorous.div({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
});

const SubmitButton = glamorous.button({
    borderRadius: '.5rem',
    border: '1px solid #007bff',
    padding: '.5rem',
    backgroundColor: '#007bff',
    color: 'white'
});

export default class MessageInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
            <Container>
                <form className='message-form' onSubmit={this.handleSubmit}>
                    <Row>
                        <Label>Username</Label>
                    </Row>
                    <Row>
                        <glamorous.Input padding=".5rem" borderRadius="5px" border="1px solid gray" width="100%" lineHeight="1.5" type='text' value={username} onChange={this.handleUsernameChange} />
                    </Row>
                    <Row>
                        <Label>Message</Label>
                    </Row>
                    <Row>
                        <glamorous.Textarea padding=".5rem" borderRadius="5px" border="1px solid gray" width="100%" innerRef={(input) => { this.messageInput = input; }} type='text' value={message} onChange={this.handleMessageChange}></glamorous.Textarea>
                    </Row>
                    <SubmitRow>
                        <SubmitButton type="submit" disabled={(!username || !message)}>Submit</SubmitButton>
                    </SubmitRow>
                </form>
            </Container>
        );
    }
}

MessageInput.propTypes = {
    onSubmit: PropTypes.func
};