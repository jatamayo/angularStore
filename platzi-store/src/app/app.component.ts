import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'hola mundo';
    array = ['🍎', '🍏', '🍇', '🍌', '🍑'];


    // Similar to languages like Java,
    // void is used where there is no data. For example,
    // if a function does not return any value then you can specify void as return type.
    addElement(): void {
        this.array.push('nuevo item');
    }

    deleteItem(index: number): void {
        this.array.splice(index, 1);
    }
}
