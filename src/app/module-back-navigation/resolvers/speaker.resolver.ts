import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {SpeakerService} from '../../services/speaker.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot} from '@angular/router/src/router_state';
import {Speaker} from '../../module-lazy/interfaces/speaker';

@Injectable()
export class SpeakerResolver implements Resolve<Speaker> {

    constructor(private speakerService: SpeakerService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Speaker> {
        return this.speakerService.getSpeakerById(Number(route.params.id), 0);
    }

}
