import { Injectable } from "@angular/core";
import { Weapon } from './weapon';
import { WEAPONS } from './weapon.data';

@Injectable()
export class WeaponService {
    public userWeapon: any;

    getCompWeapon() {
        let randomNumber = this.getRandomInt(1, 3);
        let compWeapon = this.getWeaponById(randomNumber);

        return compWeapon;
    }

    getUserWeapon() {
        return this.userWeapon;
    }

    getWinningWeapon(compWeapon: any, userWeapon: any) {
        let winner = '';

        if (compWeapon.name === 'Paper') {
            if (userWeapon.name === 'Rock') {
                winner = 'Computer';
            }
            else if (userWeapon.name === 'Scissors') {
                winner = 'You';
            }
        }

        if (compWeapon.name === 'Rock') {
            if (userWeapon.name === 'Scissors') {
                winner = 'Computer';
            }
            else if (userWeapon.name === 'Paper') {
                winner = 'You';
            }
        }

        if (compWeapon.name === 'Scissors') {
            if (userWeapon.name === 'Paper') {
                winner = 'Computer';
            }
            else if (userWeapon.name === 'Rock') {
                winner = 'You';
            }
        }

        if (compWeapon.name === userWeapon.name) {
            winner = 'Draw';
        }

        return winner;
    }

    getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    getWeaponById(id: number) {
        return WEAPONS.find(weapon => weapon.id === id);
    }

    updateUserWeapon(weapon: any) {
        this.userWeapon = weapon;
    }
}