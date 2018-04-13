import {Component, OnInit} from '@angular/core';
import {ScreenTypeEnum} from '../../enum/screen-type.enum';
import {Speaker} from '../../module-lazy/interfaces/speaker';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-auxiliary-details',
    templateUrl: './auxiliary-details.component.html',
    styleUrls: ['./auxiliary-details.component.css']
})
export class AuxiliaryDetailsComponent implements OnInit {
    public speaker: Speaker;
    public screenType: ScreenTypeEnum;

    constructor(private location: Location,
                private route: ActivatedRoute) {
        this.screenType = ScreenTypeEnum.Details;
    }

    ngOnInit() {
        this.speaker = this.route.snapshot.data['speaker'];
    }

    public back(): void {
        this.location.back();
    }

}
