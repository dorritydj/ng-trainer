import { WorkoutsService } from '@services/workouts';
import { fireEvent, render } from '@testing-library/angular';
import { Mock } from 'ts-mockery';

import { CreateWorkoutComponent } from './create-workout.component';

let mockWorkoutsService: WorkoutsService;

async function init() {
	mockWorkoutsService = Mock.all<WorkoutsService>();

	return await render(CreateWorkoutComponent, {
		providers: [
			{
				provide: WorkoutsService,
				useValue: mockWorkoutsService,
			},
		],
	});
}

describe('CreateWorkoutComponent', () => {
	it('should create', async () => {
		const component = await init();
		expect(component).toBeTruthy();
	});

	describe('Form', () => {
		describe('Name', () => {
			it('should display', async () => {
				const { getByLabelText } = await init();
				const name = getByLabelText('Name');
				expect(name).toBeVisible();
			});
		});

		describe('Submit', () => {
			it('should block submit without the name', async () => {
				const { getByRole } = await init();
				const submit = getByRole('button');
				expect(submit).toBeVisible();
				fireEvent.click(submit);
				expect(mockWorkoutsService.saveWorkout).not.toHaveBeenCalled();
			});
		});
	});
});
