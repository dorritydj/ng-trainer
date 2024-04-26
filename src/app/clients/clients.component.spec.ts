import { TrainerService } from '@services/trainer';
import { render } from '@testing-library/angular';
import { of } from 'rxjs';
import { Mock } from 'ts-mockery';
import { ClientsComponent } from './clients.component';

let mockTrainerService: TrainerService;

async function init() {
	mockTrainerService = Mock.all<TrainerService>();
	Mock.extend(mockTrainerService).with({
		getClients() {
			return of([
				{
					id: 1,
					name: 'Danny Dorrity',
				},
				{
					id: 2,
					name: 'Optimus Prime',
				},
				{
					id: 3,
					name: 'Megatron',
				},
			]);
		},
	});

	return await render(ClientsComponent, {
		componentProviders: [
			{
				provide: TrainerService,
				useValue: mockTrainerService,
			},
		],
	});
}

describe('ClientsComponent', () => {
	it('should be defined', async () => {
		const component = await init();
		expect(component).toBeTruthy();
	});

	it('should display the clients', async () => {
		const { getByText } = await init();
		const danny = getByText('Danny Dorrity');
		const optimus = getByText('Optimus Prime');
		const megatron = getByText('Megatron');

		expect(danny).toBeVisible();
		expect(optimus).toBeVisible();
		expect(megatron).toBeVisible();
	});
});
