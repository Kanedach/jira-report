import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {StateComponent} from './jira/report/state/state/state.component';
import {PiComponent} from './jira/report/pi/pi/pi.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'state', component: StateComponent},
  {path: 'pi', component: PiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
