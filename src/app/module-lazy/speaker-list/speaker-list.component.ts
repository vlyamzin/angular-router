import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Speaker} from '../interfaces/speaker';
import {SpeakerService} from '../../services/speaker.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-speaker-list',
    templateUrl: './speaker-list.component.html',
    styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit, OnDestroy {
    public list: Array<Speaker>;
    private sub: Subscription;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private speakerService: SpeakerService) {
    }

    ngOnInit() {
        // this.list = this.route.snapshot.data['list'];
        this.sub = this.speakerService.getList()
            .subscribe((data) => {
                this.list = data;
            })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public goToDetails(id: number): void {
        this.router.navigate(['../details', id], {relativeTo: this.route})
            .catch(() => {
                console.log('Ooops, something went wrong!');
            })
    }

}
