import cors from 'cors';
import { Router } from 'express'

import * as userController from './user.controller';
// import userValidation from './user.validation';
// import validate from 'express-validation';
import { authLocal ,authJWT} from '../../services/auth.service'
const routes = new Router();
routes.get('aa', (req, res) => {
    res.json({msg: 'Hi'})
})

routes.options(cors())
routes.post('/signup',  userController.signUp);
routes.post('/login', authLocal, userController.login);
routes.get('/me', authJWT, userController.getUserData);
routes.post('/trainer/addcourse',authJWT,userController.AddNewCourse)
routes.get('/trainer/courses',authJWT,userController.GetTrainerCourse)

export default routes;