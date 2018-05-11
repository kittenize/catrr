import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {colors} from '../constants';

const Container = glamorous.div({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
    // border: '1px solid blue',
});

const Header = glamorous.div({
    width: '100%',
    backgroundColor: colors.medium,
    color: colors.dark,
    paddingLeft: '15px',
    paddingRight: '15px',
    lineHeight: '2em',
    boxSizing: 'border-box',
    textAlign: 'left',
    display: 'flex'
});

const Body = glamorous.div({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '15px'
});

const IdContainer = glamorous.span({
    fontSize: '.7em',
    color: colors.dark,
    paddingRight: '15px'
});

const DateContainer = glamorous.span({
    fontSize: '.7em',
    color: colors.dark
});

const Message = ({username, date, message, id}) => (
    <Container>
        <Header>
            <glamorous.Div flexGrow="1">
                {username}
            </glamorous.Div>
            <glamorous.Div>
                <IdContainer>{('>>' + id)}</IdContainer>
                <DateContainer>{(new Date(date)).toLocaleDateString()} {(new Date(date)).toLocaleTimeString()}</DateContainer>
            </glamorous.Div>
        </Header>
        <Body>
            {message}
        </Body>
    </Container>
);

Message.propTypes = {
    username: PropTypes.string,
    date: PropTypes.number,
    message: PropTypes.string,
    id: PropTypes.string
};


export default Message;