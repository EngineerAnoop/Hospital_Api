const mongoose = require('mongoose');

// mongoose.set('strictQuery', false);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Hospital_Api');

 console.log("MongoDB is connect");
  // await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
}