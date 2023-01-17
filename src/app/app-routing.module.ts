import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'recommendation',
    loadChildren: () => import('./pages/recommendation/recommendation.module').then( m => m.RecommendationPageModule)
  },
  {
    path: '',
    redirectTo: 'recommendation',
    pathMatch: 'full'
  },
  {
    path: 'viewProfile',
    loadChildren: () => import('./pages/view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
