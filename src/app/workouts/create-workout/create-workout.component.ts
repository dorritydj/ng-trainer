import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { WorkoutsService } from '@services/workouts';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import type { Workout } from '../workout.model';

@Component({
	selector: 'app-create-workout',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
	templateUrl: './create-workout.component.html',
	styleUrl: './create-workout.component.scss',
})
export class CreateWorkoutComponent {
	private fb = inject(FormBuilder);
	private workouts = inject(WorkoutsService);

	data = this.fb.nonNullable.group({
		name: ['', Validators.required],
		lifts: [[], Validators.required],
		cooldown: [[], Validators.required],
	});

	onSubmit() {
		console.log(this.data);
		this.data.statusChanges.subscribe(console.log.bind('in status changes'));

		this.workouts.saveWorkout({} as Workout);
	}
}
