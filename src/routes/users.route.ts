/**
 * CRIAR POR DOMÍNIOS
 get /useres
 get /users/:uuid
 psst
*/

import { StatusCodes } from 'http-status-codes'
import { Router, Response, Request,NextFunction } from "express";
import userRepository from '../repositories/user.repository';
import { UserRepository_func } from '../repositories/user.respository.func';

// permite criar configuraçoes de rotas
// configuracáo apartada

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res:Response,next:NextFunction) =>{
    const users = await userRepository.findAllUser();
    res.status(StatusCodes.OK).send(users)
})

usersRoute.get('/gatinio', async( req: Request, res: Response, next: NextFunction) =>{
    const cats = await (await UserRepository_func()).findAllCats();
    res.status(StatusCodes.OK).send(cats)
})

                                            // definimos o parametro como string
usersRoute.get('/users/:uuid', async (req: Request<{uuid:string}>, res:Response,next:NextFunction)=>{
    const uuid = req.params.uuid; 
    // BancoDeDados.getUserByUuid(uuid)
    res.status(StatusCodes.OK).send({ uuid })
})

// atençao ao json
usersRoute.post('/users', (req: Request<{uuid:string}>, res:Response,next:NextFunction)=>{
   const newUser = req.body
   console.log(req.body)

   res.status(StatusCodes.CREATED).send(newUser)
})


// incompleto
usersRoute.put('/users/:uuid',  (req: Request<{uuid:string}>, res:Response,next:NextFunction)=>{
    const uuid = req.params.uuid
    const modifierUser = req.body

    modifierUser.uui = uuid

})

// incompleto
usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string}>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    // await userRepository.remove(uuid)
    res.sendStatus(StatusCodes.OK)

})



export default usersRoute;