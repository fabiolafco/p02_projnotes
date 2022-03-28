// importando dependencias path
//dependencia del core de Node
const path = require("path");
//Plugins para webpack
const MiniCssExtracPlugin = require

module.exports ={
    //1. Especificar el archivo de  entrada
    entry:'./client/index.js',
    //2. Especificar la salida del archivo
    output:{
        //2.1 Ruta bsoluta de la salida
     path: path.resolve(__dirname,'public'),
     //2.2 Nombre del archivo de salida
     filename: path.join('javascripts','bundle.js'),
     //2.3 path publico
     publicPath: '/',
    },
    //3. Modulos
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
                      '@babel/preset-env',{
                          module: false,
                          useBuiltIns: 'usage',
                          targets:'> 0.25%, not dead',
                          corejs:3
                      }
                  ]
              }            
            }
        ]

        } ,
        //3.2 Reglas para el Css
        {
            test:/\.css$/,
            use: [MiniCssExtractPlugin.loader]
        }  
    ]
    },
    //4 plugins
    plugins: [new MiniCssExtracPlugin({
        filename:path.join('stylesheets','styles.css')
    })]
};