import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModulosRoutes } from './modulos.routing';
import { InicioComponent } from './inicio/inicio.component';
import { EventosComponent } from './eventos/eventos.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
	imports: [
	NgbModule,
	FormsModule,
	ReactiveFormsModule,
	CommonModule,	
	RouterModule.forChild(ModulosRoutes),
	
],
	declarations: [InicioComponent, EventosComponent, ProductosComponent]
})

export class ModulosModule {}