const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kush090605:y5nsS29QUQ0FNpi8@cluster0.wohixap.mongodb.net/paytm?authMechanism=DEFAULT")

const userschema = new mongoose.Schema ({
    username: String,
    password: String,
    firstname: String,
    lastname: String
});
//created a model for user schema
const User = mongoose.model('User',userschema);

module.exports = {
    User
};