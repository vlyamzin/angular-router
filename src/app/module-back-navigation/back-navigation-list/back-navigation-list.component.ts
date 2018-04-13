import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpeakerService} from '../../services/speaker.service';
import {Speaker} from '../../module-lazy/interfaces/speaker';

@Component({
    selector: 'app-back-navigation-list',
    templateUrl: './back-navigation-list.component.html',
    styleUrls: ['./back-navigation-list.component.css']
})
export class BackNavigationListComponent implements OnInit {
    public list: Array<Speaker>;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private service: SpeakerService) {
    }

    ngOnInit() {
        this.service.getList()
            .toPromise()
            .then((data) => {
                this.list = data;
            })
    }

    public goToDetails(id: number): void {
        this.router.navigate(['../details', id, 'speaker'], {relativeTo: this.route});
    }

    public edit(event, id: number): void {
        event.stopPropagation();

        this.router.navigate(['../details', id, 'edit'], {relativeTo: this.route});
    }

}
