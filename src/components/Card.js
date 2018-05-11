import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {colors} from '../constants';

const Container = glamorous.div({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '2px 2px 0 0 rgba(0, 0, 0, 0.25)',
    transition: '0.3s',
    marginTop: '10px'
});

const Header = glamorous.div({
    width: '100%',
    backgroundColor: colors.dark,
    color: colors.light,
    paddingLeft: '15px',
    lineHeight: '2em',
    boxSizing: 'border-box',
    textAlign: 'left'
});

const Body = glamorous.div({
    width:'100%',
    boxSizing: 'border-box',
    backgroundColor: colors.light
});

const Card = ({header, children}) => (
    <Container>
        <Header>{header}</Header>
        <Body>
            {children}
        </Body>
    </Container>
);

Card.propTypes = {
    header: PropTypes.string,
    children: PropTypes.node
};

export default Card;