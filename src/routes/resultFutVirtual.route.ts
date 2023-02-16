import { Router, Request,Response,NextFunction } from "express"

const resultFutVirtual_Route = Router()

resultFutVirtual_Route.get('/resultvirtual',(req:Request, res:Response,next:NextFunction)=>{

})

resultFutVirtual_Route.get('/resultvirtual/:league',(req:Request, res:Response,next:NextFunction)=>{
    const league = req.params.league;
    // bancoDeDAdos.get
    res.status(200).send({league})

})


resultFutVirtual_Route.post('/',()=>{

})

