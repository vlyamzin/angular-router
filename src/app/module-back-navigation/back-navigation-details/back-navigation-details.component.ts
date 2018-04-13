import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';
import {ComponentNameEnum} from '../../enum/component-name.enum';

@Component({
    selector: 'app-back-navigation-details',
    templateUrl: './back-navigation-details.component.html',
    styleUrls: ['./back-navigation-details.component.css']
})
export class BackNavigationDetailsComponent implements OnInit {

    constructor(private navigation: NavigationService) {
    }

    ngOnInit() {
        this.navigation.store(ComponentNameEnum.BackNavigationDetails);
    }

}
