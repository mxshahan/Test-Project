import userRoutes from './User/user.routes'
import courseRoutes from './Course/course.routes'
import cors from 'cors';

export default app => {
    app.use('/api/user', userRoutes);
    app.use('/api/course', courseRoutes);  
}