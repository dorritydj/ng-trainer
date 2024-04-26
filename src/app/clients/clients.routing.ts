import type { Route } from '@angular/router';

export const routes: Route[] = [
	{
		path: ':id',
		loadComponent: () =>
			import('./client/client.component').then((c) => c.ClientComponent),
	},
];
