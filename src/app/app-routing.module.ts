import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './home-page/home-page.component';
import { RunnersComponent } from './runners/runners.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { AppSettingComponent } from './app-setting/app-setting.component';
import { GlobalMapDataComponent } from './global-map-data/global-map-data.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'scenarios', component: ScenariosComponent },  
  { path: 'runners', component: RunnersComponent },  
  { path: 'setting', component: AppSettingComponent },  
  { path: 'globalmap', component: GlobalMapDataComponent },  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
