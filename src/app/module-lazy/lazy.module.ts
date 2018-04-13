import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyComponent} from './lazy.component';
import {LazyRouter} from './lazy.routing';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import {SpeakerDetailsComponent} from './speaker-details/speaker-details.component';
import {SpeakerDetailsGuard} from './guards/speaker-details.guard';
import {SpeakersResolver} from './resolvers/speaker.resolver';

@NgModule({
    imports: [
        CommonModule,
        LazyRouter,
    ],
    declarations: [LazyComponent, SpeakerListComponent, SpeakerDetailsComponent],
    providers: [SpeakerDetailsGuard, SpeakersResolver]
})
export class LazyModule {
}
