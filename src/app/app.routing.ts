import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FirstComponent} from './module-simple/first/first.component';
import {SecondComponent} from './module-simple/second/second.component';
import {LazyGuard} from './lazy.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/simple-one',
        pathMatch: 'full'
    },
    {
        path: 'simple-one',
        component: FirstComponent
    },
    {
        path: 'simple-two',
        component: SecondComponent
    },
    {
        path: 'lazy',
        loadChildren: './module-lazy/lazy.module#LazyModule',
        canLoad: [LazyGuard]
    },
    {
        path: 'back-navigation',
        loadChildren: './module-back-navigation/back-navigation.module#BackNavigationModule'
    },
    {
        path: 'auxiliary',
        loadChildren: './module-auxiliary/auxiliary.module#AuxiliaryModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouter {
}
