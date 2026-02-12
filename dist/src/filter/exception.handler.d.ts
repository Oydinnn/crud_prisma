import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class HttpExceptionFilters implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
