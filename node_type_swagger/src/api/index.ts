import express, { Router } from "express";

const router = Router();

router.use('/',(
    req: express.Request,res: express.Response,next:express.NextFunction) => 
{
    try{
        // console.log(req.session);
        // req.session.authid = '';
        // req.session.authkey = '';
    }catch(e){
        next(e)
    }
})

export default router;