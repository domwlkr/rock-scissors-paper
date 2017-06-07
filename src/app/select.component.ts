import { Component, Output, EventEmitter } from '@angular/core';
import { WeaponService } from './weapon.service';
import { Weapon } from './weapon';
import { WEAPONS } from './weapon.data';

@Component({
    selector: 'select-weapon',
    template: `
        <div class="">
            <div class="select">
                <button *ngFor="let weapon of weapons"
                    class="button select__weapon"
                    (click)="onSelect(weapon)"
                    [class.selected]="weapon === selectedWeapon">
                    {{weapon.name}}
                </button>
            </div>

            <div class="selection-text">You have selected: <span *ngIf="selectedWeapon">{{selectedWeapon.name}}</span></div>

            <a routerLink="/show" class="button">Go</a>
        </div>
    `,
    styles: [`
        .select {
            width: 100%;
            max-width: 500px;
            display: flex;
            justify-content: space-between;
            margin: 0 auto 20px;
        }
        
        .select__weapon {
            flex: 1;
            margin: 0 20px;
            padding: 15px 0;
            color: white;
            background-color: #8173fc;
        }

        .select__weapon.selected {
            background-color: #645aba;
        }

        .selection-text {
            margin-bottom: 20px;
        }
    `]
})

export class SelectComponent {
    weapons = WEAPONS;
    selectedWeapon: Weapon;

    constructor(
        public weaponService: WeaponService) {}

    onSelect(weapon: Weapon): void {
        this.selectedWeapon = weapon;
        this.weaponService.updateUserWeapon(this.selectedWeapon);
    }
}