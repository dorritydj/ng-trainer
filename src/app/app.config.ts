import {
	provideHttpClient,
	withFetch,
	withInterceptors,
} from '@angular/common/http';
import type { ApplicationConfig } from '@angular/core';
import {
	provideClientHydration,
	withHttpTransferCacheOptions,
} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { httpUrlInterceptor } from './interceptors/http-url.interceptor';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideClientHydration(
			withHttpTransferCacheOptions({
				includePostRequests: true,
			}),
		),
		provideHttpClient(withFetch(), withInterceptors([httpUrlInterceptor])),
	],
};
