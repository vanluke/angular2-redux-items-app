import routes from './router';
import { items } from './items';

routes.get('/items', items);

export default routes;
