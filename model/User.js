const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true, // space 없애주는 역할
        unique: 1, // 똑같은 이메일은 사용 불가
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastname: {
        type: String,
        maxlength: 50,
    },
    role: {
        type: Number,
        default: 0, // 0이면 일반유저, 1이면 관리자
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },  // 토큰 유효기간
})

const User = mongoose.model('User', userSchema);