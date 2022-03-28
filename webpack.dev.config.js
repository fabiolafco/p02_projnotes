// importando dependencias path
//dependencia del core de Node
const path = require("path");

module.exports ={
    //1. Especificar el archivo de  entrada
    entry:'./client/index.js',
    //2. Especificar la salida del archivo
    output:{
        //2.1 Ruta bsoluta de la salida
     path: path.resolve(__dirname,'public'),
     //2.2 Nombre del archivo de salida
     filename:path.join('javascripts','bundle.js'),
     publicPath: '/',
    },
    //3 configurando el sercvidor de desarrollo
    devServer:{
        //3.1  folder de archivos estaticos
        static: path.join(__dirname, 'public'),
        // 3.2 Puerto del servidor desarrollo
        port:8080,
        //
        host: 'localhost'
    }
}