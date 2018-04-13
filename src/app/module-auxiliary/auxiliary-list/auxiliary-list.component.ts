import { Component, OnInit } from '@angular/core';
import {SpeakerService} from '../../services/speaker.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Speaker} from '../../module-lazy/interfaces/speaker';
import {ScreenTypeEnum} from '../../enum/screen-type.enum';

@Component({
  selector: 'app-auxiliary-list',
  templateUrl: './auxiliary-list.component.html',
  styleUrls: ['./auxiliary-list.component.css']
})
export class AuxiliaryListComponent implements OnInit {
    public list: Array<Speaker>;
    public screenType: ScreenTypeEnum;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private service: SpeakerService) {
        this.screenType = ScreenTypeEnum.List;
    }

    ngOnInit() {
        this.service.getList()
            .toPromise()
            .then((data) => {
                this.list = data;
            })
    }

    public goToDetails(id: number): void {
        this.router.navigate([{outlets: {details: `${id}`}}], {relativeTo: this.route.parent});
    }
}
