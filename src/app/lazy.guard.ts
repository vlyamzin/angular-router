import {Injectable} from '@angular/core';
import {CanLoad, Route} from '@angular/router';

@Injectable()
export class LazyGuard implements CanLoad {
    canLoad(route: Route): boolean {
        const message = window.prompt('Input a password');

        return message === '123';
    }
}
