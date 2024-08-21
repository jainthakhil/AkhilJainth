import { Router } from 'express';
const router = Router;
import {User} from './model/contactingUserSchema'

router.post('/', async (req, res)=>{
    const {name, mail, message} = req.body;
    try{
        const user = new User({name:name, email:mail, message:message});
        await user.save();
    }
    catch(err){
        console.log(err);
    }
})

export default router;