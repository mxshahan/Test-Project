import {Router} from 'express';
import User from '../models/user.model'
const routes = new Router();

routes.get('/', (req, res) => {
    res.json({msg: 'Hi'})
})

routes.post('/', async (req, res) => {
    try{
        console.log(req.body);
        const user = await User.create(req.body);
        console.log(user)
        return res.status(201).json(user.toAuthJSON());
    } catch (e) {
        return res.status(500).json(e)
    }
})

export default routes;