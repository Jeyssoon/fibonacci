const express = require("express");
const { get } = require("http");

const app = express()
const path = require('path')
const port = 3000;


app.get('/cuatro', (req, res) => {
    let numero = parseInt(req.query.numero);
    let serie =[0, 1];
    let resultadopar = req.query.serie;
    const pares = {
        get laRespuestaEs() 
        {
            if (numero % 2 === 0) 
            {
                for (let i = 0; i <= 20; i++) 
                {
                    var anterior = serie[serie.length - 2];
                    var ultimo = serie[serie.length - 1];
                    let nuevo = ultimo + anterior;
                    serie.push(nuevo);    
                }
                return resultadopar;    
               
            }
            else
            {
               return 'EL NUMERO INGRESADO ES IMPAR';
            }

            
           
        }
        
    }
    res.json(pares);

})

app.get('/cuatro', (req, res) => {
    let numero = parseInt(req.query.numero);
    var serie = [0, 1];
    let resultadoimp =  req.query.serie;
    const impares = {
        get laRespuestaEs() 
        {
            if (numero % 2 !== 0) 
            {

                for (let i = 0; i <= 10; i++) 
                {
                    var anterior = serie[serie.length - 2];
                    var ultimo = serie[serie.length - 1];
                    let nuevo = ultimo + anterior;
                    serie.push(nuevo);   
                }
                return resultadoimp; 

            
            }
            else
            {
               return 'EL NUMERO INGRESADO ES PAR';
            }
        }
    }
    res.json(impares);
})



app.listen(port, () => {
    console.log(`Escucha de el puerto 3000 ${port}!`)
}
)
