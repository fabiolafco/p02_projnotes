
// importando dependencias path
//dependencia del core de Node
const path = require("path");
const MiniCssEstractPlugin = requiere ("mini-extract-plugin");
//Agrgando soporte para eslint
const eslint

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
    },
    //4.0 Modulos
    module: {
        rules:[
            //3.1 Regla de babel
            {
        test:/\.js$/,
        exclude: /node_modules/,
        use:[
            //3.1.1 primer stage
            {
              loader: 'babel-loader',
              options:{
                  presets:[
                      [
                      '@babel/preset-env',{
                          module: false,
                          useBuiltIns: 'usage',
                          targets:'> 0.25%, not dead',
                          corejs:3
                      }
                  ]
                ]
              }            
            }
        ]

        }   
    ]
    }

}