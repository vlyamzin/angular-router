import {Component, OnInit} from '@angular/core';
import {Speaker} from '../../module-lazy/interfaces/speaker';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationService} from '../../services/navigation.service';
import {ComponentNameEnum} from '../../enum/component-name.enum';

@Component({
    selector: 'app-back-navigation-speaker',
    templateUrl: './back-navigation-speaker.component.html',
    styleUrls: ['./back-navigation-speaker.component.css']
})
export class BackNavigationSpeakerComponent implements OnInit {
    public speaker: Speaker;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private navigation: NavigationService) {
    }

    ngOnInit() {
        this.speaker = this.route.snapshot.data['speaker'];
    }

    public back(): void {
        const url = this.navigation.get(ComponentNameEnum.BackNavigationDetails);
        this.router.navigateByUrl(url.prev);
    }

    public edit(): void {
        this.router.navigate(['../', 'details', this.speaker.id, 'edit'], {relativeTo: this.route.parent});
    }

}
