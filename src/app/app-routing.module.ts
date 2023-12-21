import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'LoginModule',
    loadChildren: () => import('./login-module/login-module.module').then(m => m.LoginModuleModule)
  },
  {
    path: 'DashboardModule',
    loadChildren: () => import('./dashboardmodule/dashboardmodule.module').then(m => m.DashboardmoduleModule)
  },
  {
    path:'',
    redirectTo:'LoginModule',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
