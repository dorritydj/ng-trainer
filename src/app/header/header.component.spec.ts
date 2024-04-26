import { CommonModule } from '@angular/common';
import { type Trainer, TrainerService } from '@services/trainer';
import {
	fireEvent,
	getByRole,
	getByText,
	render,
} from '@testing-library/angular';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { of } from 'rxjs';
import { Mock } from 'ts-mockery';
import { HeaderComponent } from './header.component';

let mockTrainerService: TrainerService;

async function init() {
	mockTrainerService = Mock.all<TrainerService>();
	Mock.extend(mockTrainerService).with({
		getTrainer() {
			return of({ name: 'test trainer' } as Trainer);
		},
	});

	return await render(HeaderComponent, {
		imports: [CommonModule, AvatarModule, MenubarModule],
		componentProviders: [
			{
				provide: TrainerService,
				useValue: mockTrainerService,
			},
		],
	});
}

describe('HeaderComponent', () => {
	it('should create', async () => {
		const component = await init();
		expect(component).toBeTruthy();
	});

	describe("Trainer's Name", () => {
		it('should display with an avatar', async () => {
			const { getByText } = await init();
			const name = getByText('test trainer');
			const initials = getByText('TT');
			expect(name).toBeVisible();
			expect(initials).toBeVisible();
		});
	});

	describe('Menu bar', () => {
		it('should have options', async () => {
			const { getByRole } = await init();

			// item 1
			const client = getByRole('menuitem', { name: 'Clients' });
			expect(client).toBeVisible();

			// item 2
			const programs = getByRole('menuitem', { name: 'Programs' });
			expect(programs).toBeVisible();

			// item 3
			const workouts = getByRole('menuitem', { name: 'Workouts' });
			expect(workouts).toBeVisible();
		});

		it('should have suboptions for workouts', async () => {
			const { getByRole } = await init();
			const workouts = getByRole('menuitem', { name: 'Workouts' });
			expect(workouts).toBeVisible();

			fireEvent.click(workouts);
			const createNew = getByRole('menuitem', { name: 'Create New' });
			const viewEdit = getByRole('menuitem', { name: 'View/Edit' });

			expect(createNew).toBeVisible();
			expect(viewEdit).toBeVisible();
		});
	});
});
