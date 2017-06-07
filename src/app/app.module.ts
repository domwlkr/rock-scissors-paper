import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { SelectComponent }  from './select.component';
import { ShowComponent }  from './show.component';

import { WeaponService }  from './weapon.service';

@NgModule({
    imports: [ 
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '',
                component: SelectComponent
            },
            {
                path: 'show',
                component: ShowComponent
            },
        ], {useHash: false}),
    ],
    declarations: [
        AppComponent,
        SelectComponent,
        ShowComponent
    ],
    providers: [
        WeaponService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
