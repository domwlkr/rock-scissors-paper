import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import { WeaponService } from './weapon.service';
import { Weapon } from './weapon';

@Component({
    selector: 'show',
    template: `
        <div class="show">
            <div *ngIf="count >= 0" class="counter">
                {{ count }}
            </div>
            <div *ngIf="count < 0" class="results">
                <div class="results-wrap">
                    <div [class.winner]="winner === 'You'" class="result">
                        You
                        <span>{{ userWeapon.name }}</span>
                    </div>

                    <div class="winner">
                        The winner is:
                        {{ winner }}
                    </div>

                    <div [class.winner]="winner === 'Computer'" class="result">
                        Computer
                        <span>{{ compWeapon.name }}</span>
                    </div>
                </div>

                <a routerLink="/" class="button">Play again</a>
            </div>
        </div>
    `,
    styles: [`
        .counter {
            font-size: 5rem;
        }

        .results {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
        }

        .results-wrap {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 20px;
            border: 1px solid white;
        }

        .result {
            background-color: red;
            padding: 20px;
            width: calc(100% / 3);
        }

        .result.winner {
            background-color: #4ed964;
        }

        .result span {
            font-size: 2rem;
            display: block;
        }

        .winner {
            padding: 20px;
            width: calc(100% / 3);
        }

        .button {
            align-self: center;
        }
    `]
})

export class ShowComponent implements OnInit {
    private diff: number;
    private $counter: Observable<number>;
    private subscription: Subscription;
    private count: string;
    private compWeapon: any;
    private userWeapon: any;
    private winner: any;

    constructor(
        private router: Router,
        public weaponService: WeaponService) {}
    
    ngOnInit() {
        this.startCounter();
        this.getWeapons();
    }

    startCounter() {
        let startCount = 3;

        this.$counter = Observable.interval(1000).map((x) => {
            this.diff = startCount - x;
            return x;
        });

        this.subscription = this.$counter.subscribe((x) => this.count = String(this.diff));
    }

    getWeapons() {
        this.compWeapon = this.weaponService.getCompWeapon();
        this.userWeapon = this.weaponService.getUserWeapon();

        if (this.userWeapon === undefined) return this.router.navigate(['/']);

        this.compairWeapons();
    }

    compairWeapons() {
        this.winner = this.weaponService.getWinningWeapon(this.compWeapon, this.userWeapon);
    }
}