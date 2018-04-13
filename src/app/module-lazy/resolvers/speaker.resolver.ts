import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Speaker} from '../interfaces/speaker';
import {SpeakerService} from '../../services/speaker.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot} from '@angular/router/src/router_state';

@Injectable()
export class SpeakersResolver implements Resolve<Speaker> {

    constructor(private speakerService: SpeakerService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Speaker> {
        return this.speakerService.getSpeakerById(Number(route.params.id));
    }

}
