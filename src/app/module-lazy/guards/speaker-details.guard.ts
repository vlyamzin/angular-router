import {Injectable} from '@angular/core';
import {CanActivate, CanDeactivate} from '@angular/router';
import {SpeakerDetailsComponent} from '../speaker-details/speaker-details.component';
import {SpeakerService} from '../../services/speaker.service';


@Injectable()
export class SpeakerDetailsGuard implements CanActivate, CanDeactivate<SpeakerDetailsComponent> {
    constructor(private speakerService: SpeakerService){
    }

    canActivate(): boolean {
        return this.speakerService.canActivateItem();
    }

    canDeactivate(): boolean {
        const message = 'You need a password for leaving this page. Send SMS to the short number 101 to get your own.';
        const password = window.prompt(message);

        return password === '12345';
    }
}
