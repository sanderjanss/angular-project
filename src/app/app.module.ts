import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { AlertwarningComponent} from "./alert/alertwarning.component";
import { AlertsComponent } from './alerts/alerts.component';
import {AlertsuccessComponent} from "./alert/alertsuccess.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertwarningComponent,
    AlertsuccessComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
