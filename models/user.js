const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose);//as a plugin isliye use kra kyuki ye automatically username, password, hashing, salting implement kr deta hai.

module.exports = mongoose.model("User", userSchema);