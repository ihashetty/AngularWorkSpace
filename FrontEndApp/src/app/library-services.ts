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
            author: 'F. Scott Fitzgerald',
        },
        {
            id: 2,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
        },
        {
            id: 3,
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
    deleteBook(id: number) {
      //delete book with the given id from the bookList
      const index = this.bookList.findIndex(book => book.id === id);
      if (index > -1) {
        this.bookList.splice(index, 1);
      }
    }
    updateBook(updatedBook: Book) {
      //update the book with the same id in the bookList
      const index = this.bookList.findIndex(book => book.id === updatedBook.id);  
      if (index !== -1) {
        this.bookList[index] = updatedBook;
      } else {
        console.error('Book not found for update:', updatedBook);
      } 
    }

    greeting() {
        return 'Hello from Myservice!';
    }

}
