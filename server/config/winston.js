// importar winston
import winston,{format} from 'winston';
// extraigo componentes para el formato personalizado
const {combine, timestamp, label, printf} = format;
//Se obtienen la ruta a la raiz del proyecto
import appRoot from 'app-root-path';
// Definiendo esquema de colores
const colors = {
   error: 'red',
   warn:'yellow',
   info: 'green',
   http: 'magenta',
   debug: 'blue',
};

//agregando el esquema de colores a winston
winston.addColors(colors);

//creando formato para la consola
const myConsoleFormat = format.combine(
    //agregando colores del formato
    format.colorize({all: true}),
    // Agregando etiqueta
    format.label({label:'etiqueta'}),
    // agregando la fecha
    format.timestamp({format: 'DD-MM-YYY HH:mm:ss'}),
    format.printf((info)=> `${info.lavel}: ${info.label}: ${[info.timestamp]}:${info.message}`)
);

//Creando formato para archivo
const myFileFormat = combine(
    format.uncolorize(),P
    
);
// creando el objeto de opciones
const options={
infoFile:{
    lavel:'info',
     filename: `${appRoot}/server/logs/info.log`,
     HandleExceptions: false,
     maxsize: 5242808,// 5MB
     maxFiles: 5,
     format: myFileFormat,
},
console:{
    lavel:'debug',
    HandleExceptions: true,
    format: myConsoleFormat,

},
};

//Crean¿mos una instancia de logger
const logger = winston.createLogger({
    transports:[
        new winston.transports.File(options.infoFile),
        new winston.transports.File(options.warnFile),
        new winston.transports.Console(options.errorFile),
        new winston.transports.Console(options.console)

    ],
        exitOnError : false,// No finaliza en execeptions
    
    
});

// morgan ---> Consola
logger.stream = {
    write(message){
        logger.info(message);
    },
};

export default logger;