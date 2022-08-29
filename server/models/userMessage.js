import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required: [true, "Email is required"], 
    validate: [
        {
            validator: function(email){
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
            },
            message: "Enter a valid email",
            
        },
        
    ],},
    phoneNo:{type:String, required: [true, "Phone number is required"], 
    validate: [
        {
            validator: function(phoneNo){
                return /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/.test(phoneNo);
            },
            message: "Enter a valid phone number",
            
        },
        
    ],},
    selectedFile:{type: String, required: [true, "Picture is required"]},
    createdAt:{type:Date, default: new Date()}
});

const UserMessage = mongoose.model('UserMessage', userSchema);

export default UserMessage;