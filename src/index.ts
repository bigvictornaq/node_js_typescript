import  Express  from "express";

import authRoutes from './routes/auth';

//inicializamos la aplicacion
const app = Express();

//rutas
app.use(authRoutes);


app.get('/',(req,res)=>{
    res.send("hola Eliseo")
});

app.listen(3000,()=> console.log("servidor en 3000"));
