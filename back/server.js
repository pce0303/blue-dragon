const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('session');
const path = require('path');
const cors = require('cors');

//라우터 추가
const loginRouter = require('./router/login');
const registerRouter = require('./router/register');
const luckRouter = require('./router/luck');
const createRouter = require('./router/create');
const viewRouter = require('./router/view');

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/luck', luckRouter);
app.use('/create', createRouter);
app.use('/view', viewRouter);

app.use(cors());

// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(    
//     session({
//         secret: process.env.COOKIE_SECRET,
//         resave: false,
//         saveUninitialized: true,
//         cookie: {
//             httpOnly: true,
//             secure: false
//         }
//     })
// );

app.listen(3000, ()=>{
  console.log('server on port 3000');
});

app.use('/', express.static(path.join(__dirname, '../front/public') ));  
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../front/public/index.html'));  
});