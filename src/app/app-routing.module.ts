import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { InicioComponent } from './views/pages/inicio/inicio.component';
import { ReceituarioComponent } from './views/pages/receituario/receituario.component';
import { ClienteComponent } from './views/pages/cliente/cliente.component';


const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'cliente', component: ClienteComponent },
      {path:'receituario',component:ReceituarioComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
