import { ErrorRequestHandler } from 'express';
import HTTP_CODE from '../util.ts/HTTP_CODES';
import Joi from 'joi';

const handlerError: ErrorRequestHandler = (err, _req, res, _next) => {
    const isError = Joi.isError(err);
    const errCode = err.message.includes('required') 
     ? HTTP_CODE.IS_REQUIRED : HTTP_CODE.ERR_INTERNAL
    if (isError) return res.status(HTTP_CODE.IS_REQUIRED).json({ message: err.message});
    return res.status(HTTP_CODE.ERR_INTERNAL).json({message: 'Server Error !!'});  
}

export default handlerError;