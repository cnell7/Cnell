const express = require('express');
const cors = require('cors')
const http = require('http');
const app = express();
const server = http.createServer(app);
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3030

const cors_options = {
    origin: 'http://cnell.herokuapp.com/',
    credentials: true
}

app.use(bodyParser.json());
app.use(cors(cors_options));
app.use(express.static(path.join(__dirname, './Client/build')));

app.use(expressSession({
    name: "cnellSessionCookie",
    secret: "i am the best valorant player",
    resave: false,
    saveUninitialized: false,
    proxy : true, // add this when behind a reverse proxy, if you need secure cookies
    cookie : {
        //secure : true, // disable for localhost testing because it isn't secure
        maxAge: 5184000000 // 2 months but set to whatever floats your boat
    }
}));

server.listen(port, () => {
    console.log("Cnell up at " + port);
});