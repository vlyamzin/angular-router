import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SpeakerResolver} from './resolvers/speaker.resolver';
import {AuxiliaryComponent} from './auxiliary.component';
import {AuxiliaryListComponent} from './auxiliary-list/auxiliary-list.component';
import {AuxiliaryDetailsComponent} from './auxiliary-details/auxiliary-details.component';

const routes: Routes = [
    {
        path: 'v',
        component: AuxiliaryComponent,
        children: [
            {
                path: 'list',
                component: AuxiliaryListComponent,
            },
            {
                path: ':id',
                component: AuxiliaryDetailsComponent,
                outlet: 'details',
                resolve: {
                    speaker: SpeakerResolver
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuxiliaryRouter {
}
