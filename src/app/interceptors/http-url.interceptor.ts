import type { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const httpUrlInterceptor: HttpInterceptorFn = (req, next) => {
	const next_req = req.clone({
		url: `${environment.api_url}${req.url}`,
	});
	return next(next_req);
};
