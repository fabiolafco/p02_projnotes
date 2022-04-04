//incorporsndo estilos

import './styles/styles.css';
import './styles/mystyles.css';


console.log("Front-End Working");
// Default parameters = cuando se tiene una función
let show = (m ="Hola") => {
    console.log(m);
};
show();

// promises
function resolveAffter2Seconds(){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve('function resolve')
        },2000)
    });
}
async function asyncCall(){
    console.log("Calling asyn function!!");
    const result = await resolveAffter2Seconds();
    console.log(result);//imprime funcion resolve en la consola
}
asyncCall();