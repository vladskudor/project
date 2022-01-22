import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AuthGuard} from './components/guard/auth.guard';
import {FormsModule} from '@angular/forms';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router} from './router';
import {DirectiveDirective} from './components/directive/directive.directive';

import {AppComponent} from './app.component';
import {Layout1Component} from './components/layout/layout1.component';
import {CarsComponent} from './components/cars/cars.component';
import {FormsComponent} from './components/forms/forms.component';
import {RequestComponent} from './components/request/request.component';
import {Layout2Component} from './components/layout2/layout2.component';
import {FileComponent} from './components/file/file.component';
import {NewServiceService} from './components/service/new-service.service';
import {ResumeComponent} from './components/resume/resume.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {DaughterComponent} from './components/resume/daughter/daughter.component';
import {MenuHeaderComponent} from './components/menu-header/menu-header.component';
import {LoginComponent} from './components/login/login.component';
import {Interseptor} from './components/request/interseptor.service';
import {ProfieleComponent} from './components/profiele/profiele.component';
import {TimeComponent} from './components/time/time.component';
import {CarInformationComponent} from './components/car-information/car-information.component';


@NgModule({
  declarations: [
    AppComponent,
    Layout1Component,
    CarsComponent,
    FormsComponent,
    RequestComponent,
    Layout2Component,
    FileComponent,
    ResumeComponent,
    PageNotFoundComponent,
    DaughterComponent,
    MenuHeaderComponent,
    LoginComponent,
    DirectiveDirective,
    ProfieleComponent,
    TimeComponent,
    CarInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Router,
    HttpClientModule,
    Ng2GoogleChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
    NewServiceService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interseptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
