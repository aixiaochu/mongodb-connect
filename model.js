/**
 * 用户信息
 */
var mongoose = require('./db.js'),
Schema = mongoose.Schema;

var UserSchema = new Schema({          
    username : { type: String },                    //用户账号
    userpwd: {type: String},                        //密码
    userage: {type: Number},                        //年龄
    logindate : { type: Date}                       //最近登录时间
});

module.exports = mongoose.model('User',UserSchema);