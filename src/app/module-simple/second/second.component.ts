import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    public message: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.message = this.route.snapshot.params['matrix'];
    }

}
