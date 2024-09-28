const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    
    companyName: {
        type: String,
    },    
    email: {
        type: String,
        unique: true,
    },
    userType: {
        type: String,
        default: 'admin',
    },
    status: {
        type: String,
    },    
    password: {
        type: String,
    },

}, {
    timestamps: true,
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model('User', userSchema);

module.exports = { User };