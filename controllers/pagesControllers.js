const asyncHandler = require('express-async-handler');


const index = asyncHandler( async (req,res) => {
    return res.render('index')
});


module.exports = {
    index
};