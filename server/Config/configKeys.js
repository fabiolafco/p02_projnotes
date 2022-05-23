





//El modulo fallara de manera
//asilenciosa
DeviceMotionEvent.config();

export default{
    homeURl: `${process.env.APP_URL}:${process.env.PORT}`,
    port: process.env.PORT,
    ip: process.env.IP,
    databaseURL:process.env.DATABASE_URL,
    
};