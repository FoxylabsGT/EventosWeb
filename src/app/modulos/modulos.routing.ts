import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';


export const ModulosRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'inicio',
				component: InicioComponent,
				data: {
					title: 'Inicio',
					urls: [{title: 'Inicio', url: '/dashboard'}, {Title: 'Inicio'}]
				}
			},
		]
	}
]