import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ListarProductosComponent } from './componentes/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
//Componentes
const routes: Routes = [
  {path: ' ' , component: ListarProductosComponent},
  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'editar-producto/:id', component: CrearProductoComponent},
  {path: '**' , redirectTo: '', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
