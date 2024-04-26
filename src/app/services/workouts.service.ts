import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import type { Workout } from '../workouts/workout.model';

@Injectable({
	providedIn: 'root',
})
export class WorkoutsService {
	private id = 1;
	private http = inject(HttpClient);

	getWorkout() {
		return this.http.get(`/api/workouts/${this.id}`);
	}

	saveWorkout(workout: Workout) {
		return this.http.post('/api/workouts/save', workout);
	}
}
