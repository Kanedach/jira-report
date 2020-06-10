import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {jiraReducer} from './store/reducers/jira.reducer';
import {JiraFacadeService} from './store/jira.facade.service';
import {FeatureListComponent} from './jira/report/state/feature-list/feature-list.component';
import {EffectsModule} from '@ngrx/effects';
import {JiraEffects} from './store/effects/jira.effects';
import { StateStepComponent } from './jira/report/state/state-step/state-step.component';
import {MomentModule} from 'ngx-moment';
import { PiListComponent } from './jira/report/pi/pi-list/pi-list.component';
import { ProgressbarComponent } from './shared/progressbar/progressbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StateComponent } from './jira/report/state/state.component';
import { HeaderComponent } from './shared/header/header.component';
import { PiComponent } from './jira/report/pi/pi.component';
import { PiStepComponent } from './jira/report/pi/pi-step/pi-step.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureListComponent,
    StateStepComponent,
    PiListComponent,
    ProgressbarComponent,
    WelcomeComponent,
    StateComponent,
    HeaderComponent,
    PiComponent,
    PiStepComponent,
    LoadingComponent
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
