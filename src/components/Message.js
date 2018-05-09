import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Message = ({username, date, message, id}) => (
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
);

Message.propTypes = {
    username: PropTypes.string,
    date: PropTypes.object,
    message: PropTypes.string,
    id: PropTypes.string
};


export default Message;