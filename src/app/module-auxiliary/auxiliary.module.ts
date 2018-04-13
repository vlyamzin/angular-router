import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuxiliaryRouter} from './auxiliary.routing';
import {AuxiliaryComponent} from './auxiliary.component';
import { AuxiliaryListComponent } from './auxiliary-list/auxiliary-list.component';
import { AuxiliaryDetailsComponent } from './auxiliary-details/auxiliary-details.component';
import {SpeakerResolver} from './resolvers/speaker.resolver';

@NgModule({
    imports: [
        CommonModule,
        AuxiliaryRouter
    ],
    declarations: [
        AuxiliaryComponent,
        AuxiliaryListComponent,
        AuxiliaryDetailsComponent
    ],
    providers: [SpeakerResolver]
})
export class AuxiliaryModule {
}
