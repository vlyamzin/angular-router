import {Injectable} from '@angular/core';
import {Speaker} from '../module-lazy/interfaces/speaker';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {_throw} from 'rxjs/observable/throw'
import {delay} from 'rxjs/operators'

@Injectable()
export class SpeakerService {
    public guardWithError: boolean;
    private list: Array<Speaker>;

    constructor() {
        this.guardWithError = true;
        this.list = [
            {
                id: 1,
                name: 'Vlad Lyamzin',
                photoUrl: 'assets/img/1.jpg',
                position: 'Senior Front-End',
                theme: 'Angular Router – one to rule them all',
                time: '11:00 – 12:00'
            },
            {
                id: 2,
                name: 'Taras Mishak',
                photoUrl: 'assets/img/2.jpg',
                position: 'Business analyst',
                theme: 'Requirements management in Scrum projects',
                time: '11:00 – 12:00'
            },
            {
                id: 3,
                name: 'Roman Maliarchuk',
                photoUrl: 'assets/img/3.jpg',
                position: 'Front-end',
                theme: 'Introduction to Service Workers',
                time: '12:15 – 13:15'
            },
            {
                id: 4,
                name: 'Hryhoriy Hasyn',
                position: 'Senior .NET',
                theme: 'C# Next, .NET Core & .NET Standard',
                time: '12:15 – 13:15'
            },
            {
                id: 5,
                name: 'Pavlo Navalnyy',
                photoUrl: 'assets/img/5.jpg',
                position: 'Solution Architect',
                theme: 'The Great Gatsby, build your static like a boss',
                time: '14:00 – 15:00'
            },
            {
                id: 6,
                name: 'Oleksandr Virga',
                position: 'Solution Architect',
                theme: 'Tech Talk: Splitting monolith application into micro-services',
                time: '14:00 – 14:40'
            },
            {
                id: 7,
                name: 'Yurii Kovalchuk',
                position: 'Front-end',
                theme: 'Starting with Vue.js',
                time: '15:15 – 16:15'
            },
            {
                id: 8,
                name: 'Lyubomyr Senyuk/Denys Pysmennyi',
                position: 'CTO/Software engineer',
                theme: 'Blockchain: Crypto-anarchism or new standard of trust',
                time: '14:55 – 16:15'
            }
        ]
    }

    public getList(): Observable<Speaker[]> {
        return of(this.list).pipe(delay(0));
    }

    public getSpeakerById(id: number, d: number = 3000): Observable<Speaker> {
        const speaker = this.list.find(i => i.id === id);

        if (speaker) {
            console.log('Loading Speaker...');
            return of(speaker).pipe(delay(d));
        } else {
            return _throw('No speaker found');
        }
    }

    public saveSpeaker(speaker: Speaker): Promise<Speaker> {
        return new Promise<Speaker>((resolve, reject) => {
            const index = this.list.findIndex((s: Speaker) => {
                return s.id === speaker.id;
            });

            if (index > -1) {
                this.list[index] = speaker;
                resolve(speaker);
            } else {
                reject('Data cannot be saved.')
            }
        })
    }

    public canActivateItem(): any {
        return this.guardWithError ? 'true': true;
    }

}
