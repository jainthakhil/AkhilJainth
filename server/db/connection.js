import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({path: '../.env'});

const db = process.env.DB;

const connect = () => {
    return mongoose.connect(db,{
        tls:true
    });
        
} 

export default connect;