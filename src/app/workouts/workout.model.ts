import type { FormControl, FormGroup } from '@angular/forms';

export type Workout = {
	name: string;
	warmup: Lift[];
	lifts: Lift[];
	cooldown: Lift[];
};

export type CreateWorkoutForm = FormGroup<{
	[K in keyof Workout]: FormControl<Workout[K]>;
}>;

export type Lift = {
	name: string;
	sets: number;
	reps: number;
	// alternating, [reps] per side
	eachSide?: boolean;
	// as many reps as possible
	amrap?: boolean;
	// perceived effort percentage
	rpePercent?: number;
	// weight to perform in pounds. 0 is bodyweight
	weightInLbs?: number | number[];
	// 1 or many ids of other lifts in this workout
	circuitWith?: number | number[];
	// total distance to perform in meters
	distanceInMeters?: number;
};
