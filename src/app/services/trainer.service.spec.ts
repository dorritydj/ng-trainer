import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TrainerService } from './trainer.service';

describe('TrainerService', () => {
	let service: TrainerService;
	let httpController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [HttpClient],
		});
		service = TestBed.inject(TrainerService);
		httpController = TestBed.inject(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should make a request to grab the specific trainer information', () => {
		service.getTrainer().subscribe();
		httpController.expectOne({
			url: '/api/trainers/1',
			method: 'GET',
		});
	});

	it('should make a request to grab the clients for a given trainer', () => {
		service.getClients().subscribe();
		httpController.expectOne({
			url: '/api/trainers/1/clients',
			method: 'GET',
		});
	});
});
