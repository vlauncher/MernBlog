const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cors());

app.set('build', path.join(__dirname, '../client'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, './client/build')));


/* Routes setup */
const usersRouter = require('./routes/usersRoutes');
const postsRouter = require('./routes/postsRoutes');


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/build','index.html'))
})
app.use('/auth',usersRouter);
app.use('/posts',postsRouter);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on Port : ${PORT}`);
});