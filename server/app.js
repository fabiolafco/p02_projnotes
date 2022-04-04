//ayuda a manejar errores de http
import createError from "http-errors";
//ayuda a crear servidores web
import express from 'express';
import path from 'path';
import cookieParser from "cookie-parser";

import logger from 'morgan'

//las rutas
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

//importandos modelos de webpack
import  webpack  from "webpack";
import  webpackDevMiddleware  from "webpack-dev-middleware";
import WebpackHotMiddleware from "webpack-hot-middleware";
import webpackDevConfig from '../webpack.dev.config';
import webpackConfig from "../webpack.config";

const app = express();
//recuperar el modo de ejecución
const NodeEnv =process.env.NodeEnv || 'development';
//dicidiendo si embemos el webpack middelware
if (NodeEnv === 'development'){
  //Embleciendo webpack a mi aplicacion
  console.log(`Ejecutando en modo desarrollo`);
  // configurando la ruta del (Hot Module middelware)
  //reload=true:Habilita la recarga automatico cuando el archivo jscamboa 
  //timeout=1000 : Tiempo de refresco de pagina
  webpackDevConfig.entry = ['webpack-hot-middelware/client?reload=true&timeout=1000',
   webpackConfig.entry
  ];
  //agregando el plugin a la configuración de desarrollo
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  // creando el empaquetador apartir de un objeto de configuración
  const bundler = webpack(webpackConfig);
  //habilitando el middelware en express
  app.use(webpackDevMiddleware(bundler,{
    publicPath: webpackConfig.output.publicPath}));
    //Habilitando el middelware del webpack HMR
    app.use(WebpackHotMiddleware(bundler,{
      publicPath: webpackConfig.output.publicPath
    }));

}else{
  console.log(`Ejecutando en modo produccion`);
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"..*public")));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  next(createError(404));
});

  // error handler
app.use((err, req, res, next) =>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

export default app;
