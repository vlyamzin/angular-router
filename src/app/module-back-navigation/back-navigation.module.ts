import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackNavigationListComponent} from './back-navigation-list/back-navigation-list.component';
import {BackNavigationComponent} from './back-navigation.component';
import {BackNavigationRouter} from './back-navigation.routing';
import {BackNavigationSpeakerComponent} from './back-navigation-speaker/back-navigation-speaker.component';
import {BackNavigationThemeComponent} from './back-navigation-theme/back-navigation-theme.component';
import {BackNavigationDetailsComponent} from './back-navigation-details/back-navigation-details.component';
import {SpeakerResolver} from './resolvers/speaker.resolver';
import { BackNavigationFormComponent } from './back-navigation-form/back-navigation-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BackNavigationRouter
    ],
    declarations: [
        BackNavigationComponent,
        BackNavigationListComponent,
        BackNavigationSpeakerComponent,
        BackNavigationThemeComponent,
        BackNavigationDetailsComponent,
        BackNavigationFormComponent
    ],
    providers: [
        SpeakerResolver
    ]
})
export class BackNavigationModule {
}
