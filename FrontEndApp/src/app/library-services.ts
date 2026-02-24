import { Injectable } from '@angular/core';
import { Book } from './Book';
@Injectable({
  providedIn: 'root',
})
export class LibraryServices {
  
    private bookList: Book[] = [
        {
            id: 1,
            title: 'The Great Gatsby',
            author
              : 'F. Scott Fitzgerald',
        },
        {
            id: 1,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
        },
        {
            id: 1,
            title: '1984',
            author: 'George Orwell',
        },
    ];

    getBooks() {
        return this.bookList;
    }

    addBook(book: any) {
        this.bookList.push(book);
    }

    greeting() {
        return 'Hello from Myservice!';
    }

}
