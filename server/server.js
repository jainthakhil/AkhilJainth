import express from 'express';
import connect from './db/connection.js'
import cors from 'cors';
import User from './model/contactingUserSchema.js'

const app = express();
app.use(cors());
app.use(express.json());

const dbconnection = async ()=>{
    try {
        await connect();
        console.log("Database connection successful :)");
    } catch (err) {
        console.log("Connection lost :(", err);
    }
}
dbconnection();

app.get('/', (req,res)=>{
    res.send("hello")
})

app.post('/', async (req, res)=>{
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    console.log(name, email, message);

    // Simulate saving data to the database
    try {
        res.status(201).json({ success: 'Message received!' });
        const user = new User({name:name, email:email, message:message});
        await user.save();
        console.log("message sent");
        
    
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(5000, ()=>
    console.log("server is running on PORT 5000")
)
