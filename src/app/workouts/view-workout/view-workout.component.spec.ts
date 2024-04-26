import { WorkoutsService } from '@services/workouts';
import { render } from '@testing-library/angular';
import { Mock } from 'ts-mockery';

import { ViewWorkoutComponent } from './view-workout.component';

let mockWorkoutService: WorkoutsService;

async function init() {
	mockWorkoutService = Mock.all<WorkoutsService>();

	return await render(ViewWorkoutComponent, {
		providers: [
			{
				provide: WorkoutsService,
				useValue: mockWorkoutService,
			},
		],
	});
}

describe('ViewWorkoutComponent', () => {
	it('should create', async () => {
		const component = await init();
		expect(component).toBeTruthy();
	});
});
