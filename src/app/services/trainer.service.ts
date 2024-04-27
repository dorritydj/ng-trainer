import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import type { Observable } from 'rxjs';

export type Trainer = {
	id: string;
	name: string;
	clients: { id: string }[];
};

export type Client = {
	id: number;
	name: string;
};

@Injectable({ providedIn: 'root' })
export class TrainerService {
	private http = inject(HttpClient);
	private id = '1';

	public getTrainer(): Observable<Trainer> {
		return this.http.get<Trainer>(`/api/trainers/${this.id}`);
	}

	public updateTrainer(trainer: Partial<Trainer>) {
		return this.http.post(`/api/trainers/${this.id}`, trainer);
	}

	/**
	 * @deprecated Need to re-evaluate based on the more final api structure
	 */
	public getClients(): Observable<Client[]> {
		return this.http.get<Client[]>(`/api/trainers/${this.id}/clients`);
	}
}
