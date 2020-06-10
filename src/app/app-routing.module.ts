import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportComponent} from './jira/report/report.component';
import {PiListComponent} from './pi-list/pi-list.component';


const routes: Routes = [
  {path: '', component: ReportComponent},
  {path: 'pi', component: PiListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
