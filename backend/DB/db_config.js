import mongoose from "mongoose";
const conn_string = "mongodb+srv://tushar:fuqW5G9L01opN4Uk@ride-sharing-app.p0uwr.mongodb.net/?retryWrites=true&w=majority&appName=ride-sharing-app"
const conn = mongoose.connect(conn_string);
if(conn){
    console.log("Connected to database!");
}else{
    console.log("Failed to connect to database!",mongoose.connection.readyState);
}
export default conn