
export const childRoutes = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    url: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' },
    iconComponent: { name: 'cil-speedometer' },
  },

];
