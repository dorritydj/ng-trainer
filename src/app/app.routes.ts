import type { Routes } from '@angular/router';
import { ClientComponent } from './clients/client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { CreateWorkoutComponent } from './workouts/create-workout/create-workout.component';
import { ViewWorkoutComponent } from './workouts/view-workout/view-workout.component';

export const routes: Routes = [
	{
		path: 'clients',
		component: ClientsComponent,
		children: [
			{
				path: ':id',
				component: ClientComponent,
			},
		],
	},
	{
		path: 'workouts',
		children: [
			{
				path: 'create',
				component: CreateWorkoutComponent,
			},
			{
				path: 'view',
				component: ViewWorkoutComponent,
			},
		],
	},
];
