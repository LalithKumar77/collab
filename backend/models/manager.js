const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');
const { type } = require('os');

// manager schema
const managerSchema = new mongoose.Schema({
    managerName: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
         },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
        },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

managerSchema.pre('save', async function (next) {
    if(!this.isModified('password'))
        return next();
    const hash = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,hash);
    next();
});

managerSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

const manager = mongoose.model('Manager',managerSchema);

module.exports = manager;