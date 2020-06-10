import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {jiraReducer} from './store/reducers/jira.reducer';
import {JiraFacadeService} from './store/jira.facade.service';
import {ReportComponent} from './jira/report/report.component';
import {FeatureListComponent} from './jira/feature-list/feature-list.component';
import {EffectsModule} from '@ngrx/effects';
import {JiraEffects} from './store/effects/jira.effects';
import { StateStepComponent } from './jira/state-step/state-step.component';
import {MomentModule} from 'ngx-moment';
import { PiListComponent } from './pi-list/pi-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    FeatureListComponent,
    StateStepComponent,
    PiListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({jira: jiraReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
    EffectsModule.forRoot([JiraEffects]),
    MomentModule
  ],
  providers: [JiraFacadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
