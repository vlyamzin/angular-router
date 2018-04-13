import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpeakerService} from '../services/speaker.service';
import {NavigationService} from '../services/navigation.service';

@Component({
    selector: 'app-lazy-comp',
    templateUrl: './lazy.component.html',
    styles: []
})
export class LazyComponent implements OnInit {
    constructor(private router: Router,
                private route: ActivatedRoute,
                private speakerService: SpeakerService,
                private navigation: NavigationService) {
    }

    ngOnInit() {
        this.navigation.clear();
    }

    public fixGuard(): void {
        this.speakerService.guardWithError = false;
    }
}
