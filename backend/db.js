const mongoose = require('mongoose');
const URL = "mongodb+srv://hassansfida:ez0SWw7mQUX88IZj@cluster0.bdgwgre.mongodb.net/delicious?retryWrites=true&w=majority"
const mongoDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("connected")
    } catch(error) {
        console.log("error ", error)
    }
}


module.exports = mongoDB