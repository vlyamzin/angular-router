import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Speaker} from '../interfaces/speaker';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './speaker-details.component.html',
    styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {
    public speaker: Speaker;

    constructor(private location: Location,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.speaker = this.route.snapshot.data['speaker'];
    }

    public back(): void {
        this.location.back();
    }

}
