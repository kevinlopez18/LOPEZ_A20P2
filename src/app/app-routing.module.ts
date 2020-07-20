import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'activ1',
    loadChildren: () => import('./activ1/activ1.module').then( m => m.Activ1PageModule)
  },
  {
    path: 'activ2',
    loadChildren: () => import('./activ2/activ2.module').then( m => m.Activ2PageModule)
  },
  {
    path: 'activ3',
    loadChildren: () => import('./activ3/activ3.module').then( m => m.Activ3PageModule)
  },
  {
    path: 'activ4',
    loadChildren: () => import('./activ4/activ4.module').then( m => m.Activ4PageModule)
  },
  {
    path: 'activ5',
    loadChildren: () => import('./activ5/activ5.module').then( m => m.Activ5PageModule)
  },
  {
    path: 'activ6',
    loadChildren: () => import('./activ6/activ6.module').then( m => m.Activ6PageModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./persona/persona.module').then( m => m.PersonaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
