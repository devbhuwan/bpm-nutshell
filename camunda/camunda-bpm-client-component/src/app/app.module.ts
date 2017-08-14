import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BpmModule} from './bpm/bpm.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers/index';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([], {useHash: true}),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument({}) : [],
    EffectsModule.forRoot([]),
    BpmModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
