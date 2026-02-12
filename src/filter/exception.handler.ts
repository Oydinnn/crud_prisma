import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilters implements ExceptionFilter{
  catch(exception: any, host: ArgumentsHost){
    const ctx = host.switchToHttp()

    const req = ctx.getRequest()
    const res = ctx.getResponse()

    const status = exception.getStatus()
    const message = exception.message

    res.status(status).json({
      status,
      message, 
      path: req.path,
      time: new Date().toISOString()
    })
  }
}