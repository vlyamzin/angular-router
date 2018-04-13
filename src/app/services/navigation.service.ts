import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ComponentNameEnum} from '../enum/component-name.enum';
import {filter, pairwise} from 'rxjs/operators';

interface IRoutePair {
    prev: string;
    current: string;
}

export interface IStoredRoutePair extends IRoutePair {
    component: ComponentNameEnum;
}

@Injectable()
export class NavigationService {
    private activeRoutePair: IRoutePair;
    private storedRoutes: Array<IStoredRoutePair>;

    constructor(private router: Router) {
        this.storedRoutes = [];

        router.events
            .pipe(
                filter(e => e instanceof NavigationEnd),
                pairwise()
            )
            .subscribe((event: [NavigationEnd, NavigationEnd]) => {
                this.activeRoutePair = {
                    prev: event[0].urlAfterRedirects,
                    current: event[1].urlAfterRedirects
                };
            })
    }

    public store(name: ComponentNameEnum): void {
        if (this.activeRoutePair && this.activeRoutePair.hasOwnProperty('prev')) {
            const storedRouteIndex = this.getStoredRoute(name);

            if (storedRouteIndex < 0) {
                const route: IStoredRoutePair = Object.assign({}, this.activeRoutePair, {
                    component: name
                });

                this.storedRoutes.push(route);
            }
        } else {
            this.storedRoutes.push({
                prev: null,
                current: null,
                component: name
            })
        }
    }

    public get(name: ComponentNameEnum): IStoredRoutePair {
        const index = this.getStoredRoute(name);

        if (index >= 0) {
            return this.storedRoutes.splice(index, 1)[0];
        } else {
            return null;
        }
    }

    public clear(): void {
        this.storedRoutes.length = 0;
    }

    private getStoredRoute(name: ComponentNameEnum): number {
        return this.storedRoutes.findIndex((r: IStoredRoutePair) => {
            return r.component === name;
        });
    }

}
