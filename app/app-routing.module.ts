import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/pages/inicio/inicio.component';
import { DermatologosComponent } from './components/pages/dermatologos/dermatologos.component';
import { EnfermedadesComponent } from './components/pages/enfermedades/enfermedades.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { RutinasComponent } from './components/pages/rutinas/rutinas.component';
import { TiendasComponent } from './components/pages/tiendas/tiendas.component';
import { TiposPielComponent } from './components/pages/tipos-piel/tipos-piel.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  { path:"inicio", component:InicioComponent},
  { path:"rutinas", component: RutinasComponent},
  { path:"dermatologos", component:DermatologosComponent},
  { path:"enfermedades", component:EnfermedadesComponent},
  { path:"productos", component:ProductosComponent},
  { path:"tiendas", component:TiendasComponent},
  { path:"tipos-piel", component:TiposPielComponent},
  { path:"info", component:InfoComponent},
  { path:'**',redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
