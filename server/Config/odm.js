// 1 Importando odm
import mongoose from "mongoose";
// 2 Importando looger
import winston from "./winston";

class mongooseODM{
    //metodo especial constructor
    constructor (url) {
        // crear la propiedad
        this.url = url;

    }
    //methodos
    async connect(){
        try{
           // agregando librerias globale
           mongoose.Promise = global.Promise
           winston.info(`Conectado ala base de datos ${this.url}`) 
           const connection = await mongoose.connect()

        } catch(error){
            
        }
    }
}