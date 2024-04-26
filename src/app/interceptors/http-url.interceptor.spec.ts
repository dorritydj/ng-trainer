import {
	type HttpInterceptorFn,
	HttpRequest,
	provideHttpClient,
} from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { httpUrlInterceptor } from './http-url.interceptor';

describe('httpUrlInterceptor', () => {
	const interceptor: HttpInterceptorFn = (req, next) =>
		TestBed.runInInjectionContext(() => httpUrlInterceptor(req, next));

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideHttpClient(), provideHttpClientTesting()],
		});
	});

	it('should be created', () => {
		expect(interceptor).toBeTruthy();
	});

	it('should add the correct url to every request', () => {
		const og = new HttpRequest('GET', '/api/trainers/1');
		const mockHandler = jest.fn();
		interceptor(og, mockHandler);
		const next_req = og.clone({
			url: 'http://localhost:3100/api/trainers/1',
		});
		expect(mockHandler).toHaveBeenCalledWith(next_req);
	});
});
