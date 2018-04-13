import {RouterModule, Routes} from '@angular/router';
import {LazyComponent} from './lazy.component';
import {NgModule} from '@angular/core';
import {SpeakerListComponent} from './speaker-list/speaker-list.component';
import {SpeakersResolver} from './resolvers/speaker.resolver';
import {SpeakerDetailsComponent} from './speaker-details/speaker-details.component';
import {SpeakerDetailsGuard} from './guards/speaker-details.guard';

const routes: Routes = [
    {
        path: '',
        component: LazyComponent,
        children: [
            {
                path: 'speakers',
                component: SpeakerListComponent,

            },
            {
                path: 'details/:id',
                component: SpeakerDetailsComponent,
                resolve: {
                    speaker: SpeakersResolver
                },
                canActivate: [SpeakerDetailsGuard],
                canDeactivate: [SpeakerDetailsGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LazyRouter {
}
