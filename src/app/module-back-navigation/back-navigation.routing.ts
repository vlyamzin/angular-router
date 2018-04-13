import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BackNavigationComponent} from './back-navigation.component';
import {BackNavigationListComponent} from './back-navigation-list/back-navigation-list.component';
import {BackNavigationSpeakerComponent} from './back-navigation-speaker/back-navigation-speaker.component';
import {BackNavigationThemeComponent} from './back-navigation-theme/back-navigation-theme.component';
import {BackNavigationDetailsComponent} from './back-navigation-details/back-navigation-details.component';
import {SpeakerResolver} from './resolvers/speaker.resolver';
import {BackNavigationFormComponent} from './back-navigation-form/back-navigation-form.component';

const routes: Routes = [
    {
        path: '',
        component: BackNavigationComponent,
        children: [
            {
                path: 'list',
                component: BackNavigationListComponent
            },
            {
                path: 'details',
                component: BackNavigationDetailsComponent,
                children: [
                    {
                        path: ':id/speaker',
                        component: BackNavigationSpeakerComponent,
                        resolve: {
                            speaker: SpeakerResolver
                        }
                    },
                    {
                        path: ':id/theme',
                        component: BackNavigationThemeComponent,
                        resolve: {
                            speaker: SpeakerResolver
                        }
                    }
                ]
            },
            {
                path: 'details/:id/edit',
                component: BackNavigationFormComponent,
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
export class BackNavigationRouter {
}
