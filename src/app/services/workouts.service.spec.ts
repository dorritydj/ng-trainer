import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WorkoutsService } from '@services/workouts';

const mockWorkout = {
	name: 'Test Workout',
	warmup: [],
	lifts: [],
	cooldown: [],
};

describe('WorkoutsService', () => {
	let service: WorkoutsService;
	let httpController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [HttpClient],
		});
		service = TestBed.inject(WorkoutsService);
		httpController = TestBed.inject(HttpTestingController);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should get a full workout for the given id', () => {
		service.getWorkout().subscribe();
		httpController.expectOne({
			url: '/api/workouts/1',
			method: 'GET',
		});
	});

	it('should make a request to save the workout', () => {
		service.saveWorkout(mockWorkout).subscribe();
		httpController.expectOne({
			url: '/api/workouts/save',
			method: 'POST',
		});
	});
});
