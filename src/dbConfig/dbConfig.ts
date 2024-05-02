import mongoose from 'mongoose';
// mongodb+srv://anujgupta:<anujgupta>@cluster0.z04vn4e.mongodb.net/
export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log('MongoDB Connected succesfully')
        })

        connection.on('error',(err)=>{
            console.log('MonogDB connection error, Please make sure MongoDB is running.'+ err);
            process.exit()
        })
    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error)
    }
}