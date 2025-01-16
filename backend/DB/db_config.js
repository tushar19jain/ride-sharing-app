import mongoose from "mongoose";
const conn_string = "#"
const conn = mongoose.connect(conn_string);
if(conn){
    console.log("Connected to database!");
}else{
    console.log("Failed to connect to database!",mongoose.connection.readyState);
}
export default conn