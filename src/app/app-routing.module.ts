import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {StateComponent} from './jira/report/state/state.component';
import {PiComponent} from './jira/report/pi/pi.component';
import {ChartPieComponent} from './shared/chart-pie/chart-pie.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'state', component: StateComponent},
  {path: 'pi', component: PiComponent},
  {path: 'chart', component: ChartPieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
