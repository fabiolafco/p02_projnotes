//importamos dependencias
import ExpHbs from 'express-handlebars';
//Importamos el administrador de rutas
import path, { dirname } from 'path';
import app from '../app';

//exportando funcion de configuracio
//app es unsa instancia de express
export default (app) => [
    //Registro el motor de plantillas
    app.engine('hbs', ExpHbs ({
        extname:'.hbs',
        defaultLayout: 'mainLayout',

    
    })
    );
    //Establecer el motor de plantilla
    app.set('view engine', 'hbs');
//Establecer las rutas de las vistas
app.set('view', path.join(_dirname, '..', 'views'));
//Retornando la resistencia de la inatancia de express
return app;
];