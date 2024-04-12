import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
@Injectable()
export class ToolsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        const now = Date.now();
        return next.handle().pipe(
            map((data) => ({
                ...data, serverProcessingTime: Date.now() - now
            }))
        );
    }
}