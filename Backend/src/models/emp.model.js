// user schema

const mongoose =require( 'mongoose');
const { Schema } = mongoose;


const empSchema = new Schema({
            name:String,
             email: String,
             title:String,
             department:String,
             phone:Number,
             employmentType:String,
             notes:String,

            empid:String,
            gender: String,
            dateOfBirth: Date,
            // date:Date
           
})

const empModel = mongoose.model("emp", empSchema)

module.exports = empModel