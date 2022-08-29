import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phoneNo:{type:String, required:true},
    selectedFile:{type: String, required: [true, "Picture is required"]},
    createdAt:{type:Date, default: new Date()}
});

const UserMessage = mongoose.model('UserMessage', userSchema);

export default UserMessage;