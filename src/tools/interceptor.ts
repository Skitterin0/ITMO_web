import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
@Injectable()
export class Interceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        const now = Date.now();
        return next.handle().pipe(
            tap(() => {
                const request = context.switchToHttp().getRequest();
                request.res.locals.serverProcessingTime = Date.now() - now;
            }),
        );
    }
}