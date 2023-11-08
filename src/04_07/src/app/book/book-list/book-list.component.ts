import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models';
import { BookCardComponent } from "../book-card/book-card.component";
import { AsyncPipe, NgForOf } from "@angular/common";
import { Store } from '@ngrx/store';
import { bookCollection } from '../store/book-collection.selectors';

@Component({
    selector: 'ws-book-list',
    styleUrls: [ './book-list.component.scss' ],
    standalone: true,
    imports: [
        BookCardComponent,
        NgForOf,
        AsyncPipe,
    ],
    templateUrl: 'book-list.component.html'
})
export class BookListComponent {
    books$: Observable<ReadonlyArray<Book>>;

    constructor(private store: Store) {
        this.books$ = this.store.select(bookCollection);
    }
}