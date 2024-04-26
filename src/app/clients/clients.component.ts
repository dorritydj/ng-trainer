import { Component, type Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { TrainerService } from '@services/trainer';
import type { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
	selector: 'app-clients',
	standalone: true,
	imports: [RouterModule, TabMenuModule],
	templateUrl: './clients.component.html',
	styleUrl: './clients.component.scss',
})
export class ClientsComponent {
	trainer = inject(TrainerService);
	clients = toSignal(this.trainer.getClients());

	menu_items: Signal<MenuItem[]> = computed(() => {
		const clients = this.clients();
		if (!clients) return [];

		return clients.map((client) => ({
			label: client.name,
			routerLink: `/clients/${client.id}`,
		}));
	});
}
