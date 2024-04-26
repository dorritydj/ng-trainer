import { HttpClientTestingModule } from '@angular/common/http/testing';
import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

async function init() {
	return await render(AppComponent, {
		imports: [HttpClientTestingModule],
	});
}

describe('App', () => {
	it('should render the base app', async () => {
		const component = await init();
		expect(component).toBeDefined();
	});
});
