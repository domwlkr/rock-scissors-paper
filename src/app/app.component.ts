import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <section class="container">
            <header>
                <h1>{{title}}</h1>
            </header>
            <router-outlet></router-outlet>
        </section>
    `,
    styles: [`
        .container {
            text-align: center;
        }
    `]
})

export class AppComponent  {
    title = 'Rock, Scissors, Paper';
}
