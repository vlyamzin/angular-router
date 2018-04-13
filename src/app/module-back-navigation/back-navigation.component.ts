import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../services/navigation.service';

@Component({
    selector: 'app-back-navigation',
    template: '<router-outlet></router-outlet>'
})
export class BackNavigationComponent implements OnInit {
    constructor(private navigation: NavigationService) {
    }

    ngOnInit() {
        this.navigation.clear();
    }
}
