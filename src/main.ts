import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DefaultComponent } from './app/defaults/defaults.component';
import { PerfComponent } from './app/perf/perf.component';
import { environment } from './environments/environment';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'perf'},
  {path:'default', component: DefaultComponent},
  {path:'perf', component: PerfComponent},
 // {path:'details/:index', component: PerfViewComponent}    
  {path:'details/:index', loadComponent:() => 
     import('./app/perf-view.component').then(m => m.PerfViewComponent)}
];

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {providers:[ importProvidersFrom(RouterModule.forRoot(routes))]})
// platformBrowserDynamic().bootstrapModule(AppModule)
// .catch(err => console.error(err));
