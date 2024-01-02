import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { DermatologosComponent } from './components/pages/dermatologos/dermatologos.component';
import { EnfermedadesComponent } from './components/pages/enfermedades/enfermedades.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { RutinasComponent } from './components/pages/rutinas/rutinas.component';
import { TiendasComponent } from './components/pages/tiendas/tiendas.component';
import { TiposPielComponent } from './components/pages/tipos-piel/tipos-piel.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    InicioComponent,
    DermatologosComponent,
    EnfermedadesComponent,
    ProductosComponent,
    RutinasComponent,
    TiendasComponent,
    TiposPielComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
