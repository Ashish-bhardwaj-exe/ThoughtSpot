import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }],
});
export default mongoose.model("User", userSchema);
// users



//extra 
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         validate: {
//             validator: function(v) {
//                 return /^ABCD/.test(v);
//             },
//             message: props => `${props.value} is not a valid email! It must start with 'ABCD'.`
//         }
//     },
//     // other fields...
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;




// with the help of aggregation ++++++++++================+++++++++


// const usersWithABCD = await User.aggregate([
//   {
//       $match: {
//           email: { $regex: /^ABCD/, $options: 'i' } // 'i' makes it case-insensitive
//       }
//   }
// ]);

// console.log(usersWithABCD);

