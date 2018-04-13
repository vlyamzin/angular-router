import {Component, OnInit} from '@angular/core';
import {Speaker} from '../../module-lazy/interfaces/speaker';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-back-navigation-theme',
    templateUrl: './back-navigation-theme.component.html',
    styleUrls: ['./back-navigation-theme.component.css']
})
export class BackNavigationThemeComponent implements OnInit {
    public speaker: Speaker;

    constructor(private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.speaker = this.route.snapshot.data['speaker'];
    }

    public edit(): void {
        this.router.navigate(['../', 'details', this.speaker.id, 'edit'], {relativeTo: this.route.parent});
    }
}
