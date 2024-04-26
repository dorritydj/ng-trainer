import { CommonModule } from '@angular/common';
import { Component, type Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { type Trainer, TrainerService } from '@services/trainer';
import type { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [CommonModule, AvatarModule, MenubarModule],
	providers: [TrainerService],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	trainer = inject(TrainerService);
	curr_trainer: Signal<Trainer | undefined> = toSignal(
		this.trainer.getTrainer(),
	);
	trainer_initials = computed(() => {
		const trainer = this.curr_trainer();
		return trainer?.name
			?.split(' ')
			.map((name: string) => name[0])
			.join('')
			.toUpperCase();
	});

	menu_items: MenuItem[] = [
		{
			label: 'Clients',
			routerLink: '/clients',
		},
		{
			label: 'Programs',
			routerLink: '/programs',
		},
		{
			label: 'Workouts',
			items: [
				{
					label: 'Create New',
					routerLink: '/workouts/create',
				},
				{
					label: 'View/Edit',
					routerLink: '/workouts/view',
				},
			],
		},
	];
}
