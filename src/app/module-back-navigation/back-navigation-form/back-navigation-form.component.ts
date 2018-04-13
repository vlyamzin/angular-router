import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationService} from '../../services/navigation.service';
import {SpeakerService} from '../../services/speaker.service';
import {ComponentNameEnum} from '../../enum/component-name.enum';
import {Speaker} from '../../module-lazy/interfaces/speaker';

@Component({
    selector: 'app-back-navigation-form',
    templateUrl: './back-navigation-form.component.html',
    styleUrls: ['./back-navigation-form.component.css']
})
export class BackNavigationFormComponent implements OnInit {
    public speaker: Speaker;


    constructor(private router: Router,
                private route: ActivatedRoute,
                private navigation: NavigationService,
                private speakerService: SpeakerService) {
    }

    ngOnInit() {
        this.navigation.store(ComponentNameEnum.BackNavigationForm);
        this.speaker = this.route.snapshot.data['speaker'];
    }

    public back(): void {
        const url = this.navigation.get(ComponentNameEnum.BackNavigationForm);

        this.router.navigateByUrl(url.prev);
    }

    public save(): void {
        this.speakerService.saveSpeaker(this.speaker)
            .then(() => {
                this.back();
            })
            .catch((err) => {
                console.log(err);
            })
    }

}
