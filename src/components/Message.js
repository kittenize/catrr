import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

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
    alignItems: 'center'
});

const BoldSpan = glamorous.span({
    fontWeight: 'bold',
    paddingRight: '5px'
});

const SecondarySpan = glamorous.span({
    fontSize: '.7em',
    color: '#AAA'
});

const Message = ({username, date, message, id}) => (
    <Container>
        <Row>
            <BoldSpan>{username}</BoldSpan>
            <SecondarySpan>{(new Date(date)).toLocaleDateString()} {(new Date(date)).toLocaleTimeString()}</SecondarySpan>
        </Row>
        <Row>
            {message}
        </Row>
        <Row>
            <SecondarySpan>{id}</SecondarySpan>
        </Row>
    </Container>
);

Message.propTypes = {
    username: PropTypes.string,
    date: PropTypes.number,
    message: PropTypes.string,
    id: PropTypes.string
};


export default Message;