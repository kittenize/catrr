import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

export default class Message extends Component {
    render(){
        let {username, date, message, id} = this.props;
        return (
            <div className='message'>
                <Row>
                    <Col xs={12}>
                        <span className='username'>{username}</span> <span className='date'>{date.toLocaleDateString()} {date.toLocaleTimeString()}</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        {message}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <span className='uuid'>{id}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}