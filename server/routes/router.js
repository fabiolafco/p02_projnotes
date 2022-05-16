// Importando el enrutador de Home
import homeRouter from './homeRoutes';

// funcion que agrega todos los enrutadores
// a la aplicacion de express
const addRoutes = (app) => {
  /* Agregando el enrutador a Home */
  app.use('/', homeRouter);
};

/* GET home page. */

export default {
  addRoutes,
};
