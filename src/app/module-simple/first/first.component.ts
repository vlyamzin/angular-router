import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {forkJoin} from 'rxjs/observable/forkJoin';
import {mergeMap} from 'rxjs/operators';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
    public message: string;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        const query = this.route.snapshot.queryParams['text'];
        const frag = this.route.snapshot.fragment;

        this.message = `${query} ${frag}!`;

        // forkJoin(this.route.queryParams, this.route.fragment)
        //     .subscribe((response) => {
        //         this.message = `${response[0]} ${response[1]}!`;
        //     });
    }

}
