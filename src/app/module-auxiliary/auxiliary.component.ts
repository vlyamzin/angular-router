import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../services/navigation.service';
import {ScreenTypeEnum} from '../enum/screen-type.enum';

@Component({
    selector: 'app-auxiliary',
    templateUrl: './auxiliary.component.html',
    styleUrls: ['./auxiliary.component.css']
})
export class AuxiliaryComponent implements OnInit {
    public detailsIsOpen: boolean;

    constructor(private navigation: NavigationService) {
        this.detailsIsOpen = false;
    }

    ngOnInit() {
        this.navigation.clear();
    }

    public onActivate(component): void {
        if (component.screenType === ScreenTypeEnum.Details) {
            this.detailsIsOpen = true;
        }
    }

    public onDeactivate(component): void {
        if (component.screenType === ScreenTypeEnum.Details) {
            this.detailsIsOpen = false;
        }
    }
}
