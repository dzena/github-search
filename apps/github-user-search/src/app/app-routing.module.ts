import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    loadChildren: () =>
      import('@github-search/feature/lazy/search').then(
        (m) => m.FeatureLazySearchModule
      ),
  },
  {
    path: 'search/users',
    loadChildren: () =>
      import('@github-search/feature/lazy/users').then(
        (m) => m.FeatureLazyUsersModule
      ),
  },
  {
    path: 'search/repositories',
    loadChildren: () =>
      import('@github-search/feature/lazy/repositories').then(
        (m) => m.FeatureLazyRepositoriesModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
