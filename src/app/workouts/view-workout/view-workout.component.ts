import { Component, inject } from '@angular/core';
import { WorkoutsService } from '@services/workouts';

@Component({
	selector: 'app-view-workout',
	standalone: true,
	imports: [],
	templateUrl: './view-workout.component.html',
	styleUrl: './view-workout.component.scss',
})
export class ViewWorkoutComponent {
	workouts = inject(WorkoutsService);
}
