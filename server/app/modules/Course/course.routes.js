
import { Router } from 'express'
import * as courseController from './course.controller';
import { authLocal ,authJWT} from '../../services/auth.service'
const routes = new Router();
routes.get('/getCourse/:id',courseController.GetSingleCourse)
routes.get('/getAllCourse',courseController.GetAllCourse)
routes.get('/getAllCourse/:id',courseController.GetUserCourse)
routes.post('/charge', courseController.stripeCharge)
export default routes;