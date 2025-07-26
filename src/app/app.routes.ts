import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => {
      const component = await import(
        './layout/auth-layout/auth-layout.component'
      );
      return component.AuthLayoutComponent;
    },
    children: [],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
