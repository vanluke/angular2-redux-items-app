import routes from './router';
import { items, item } from './items';

routes.get('/items', items);
routes.get('/item/:id', item);

export default routes;
