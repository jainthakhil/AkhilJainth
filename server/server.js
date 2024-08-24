import express from 'express';
import connect from './db/connection.js'
import cors from 'cors';
import User from './model/contactingUserSchema.js'

const app = express();


const corsOptions = {
    origin: [
      'https://akhiljainthdev.vercel.app', // Deployed frontend
      'http://localhost:5173' // Local frontend
    ],
    methods: ['GET', 'POST'], // Allowed methods
    credentials: true // Allow credentials like cookies
  };

app.use(cors(corsOptions));

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

app.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        console.log("Validation failed:", { name, email, message });
        return res.status(400).json({ error: 'All fields are required' });
    }

    console.log("Received data:", { name, email, message });

    try {
        const user = new User({ name, email, message });
        console.log("User object:", user);
        await user.save();
        console.log("Message saved successfully.");
        res.status(201).json({ success: 'Message received!' });
        
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



app.listen(5000, ()=>
    console.log("server is running on PORT 5000")
)
