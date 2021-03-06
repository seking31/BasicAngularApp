import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
    @Input() rating!: number;
    starWidth: number | undefined;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`${this.rating}`)
    }

}