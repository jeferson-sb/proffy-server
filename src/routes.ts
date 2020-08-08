import { Router } from 'express'
import LecturesControler from './controllers/LecturesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = Router()
const lecturesControllers = new LecturesControler()
const connectionsController = new ConnectionsController()

routes.post('/lectures', lecturesControllers.create)
routes.get('/lectures', lecturesControllers.index)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;
    