import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FirstComponent} from './module-simple/first/first.component';
import {SecondComponent} from './module-simple/second/second.component';
import {AppRouter} from './app.routing';
import { SimpleNavigationComponent } from './module-simple/simple-navigation/simple-navigation.component';
import {LazyGuard} from './lazy.guard';
import {SpeakerService} from './services/speaker.service';
import {NavigationService} from './services/navigation.service';

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        SecondComponent,
        SimpleNavigationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouter
    ],
    providers: [LazyGuard, SpeakerService, NavigationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
