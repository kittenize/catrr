const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const { graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const messages =  [{
    username: 'cat2',
    message: 'first message',
    date: (new Date()).getTime(),
    id: 'rpQFXw'
}, {
    username: 'dog',
    message: 'second',
    date: (new Date()).getTime(),
    id: 'UXCGW7'
}];

const typeDefs = `
    type Query {messages: [Message]}
    type Message {username: String, id: String!, message: String, date: Float}
    type Mutation {upsertMessage(username: String, id: String!, message: String, date: Float) : Message}
`;

const resolvers = {
    Query: {messages: () => messages},
    Mutation: {
        upsertMessage: (_, {username, id, message, date}) => {
            let messageData = messages.filter(m => m.id === id)[0];
            if(!messageData){
                messageData = {
                    username,
                    id,
                    message,
                    date
                };

                messages.push(messageData);
            } else {
                Object.assign(messageData, {
                    username,
                    id,
                    message,
                    date
                });
            }

            return messageData;
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use('/graphql', bodyParser.json(), (req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'content-type, authorization, content-length, x-requested-with, accept, origin');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header('Allow', 'POST, GET, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    if(req.method == 'OPTIONS'){
        res.sendStatus(200);
    } else {
        next();
    }
}, graphqlExpress({schema}));
app.use('/graphiql', graphqlExpress({endpointUrl: '/graphsql'}));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.listen(8080);
