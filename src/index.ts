import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express()

// lidar com json - básicos
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// toda aquele arquivo de rota é lido: ...route.ts

// configuraçoes de rotas
app.use(statusRoute) // primeira rota - verificar se está ONLINE
app.use(usersRoute);

// atribuindo tipagem
// app.get('/status', (req:Request , res:Response, next:NextFunction)=>{
//     res.status(200).send({ foo: 'bar' })
// })

app.listen(3000, ()=>{
    console.log('running on port http://localhost:3000/status')
})