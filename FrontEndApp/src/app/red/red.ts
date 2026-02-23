import { Component } from '@angular/core';

@Component({
  selector: 'app-red',
  standalone: false,
  templateUrl: './red.html',
  styleUrl: './red.css',
})
export class Red {
  //interpolation
  name: string = "Red";

  Books: any[] = [
    { title: "Book", author: "Author1"},
    { title: "Book", author: "Author2"},
    { title: "Book", author: "Author3"}
  ];

  //event binding
  onButtonClick() {
    alert('Button Clicked!');
  }

  //two way data binding
  inputText: string = '';

  //property binding
  imageUrl: string = 'https://static.independent.co.uk/2026/02/20/10/27/SEI285973161.jpg?width=1200';

  price: number = 100;

  ngOnInit() {
    console.log('Red component initialized');
  }

  ngOnChanges() {
    console.log('Red component changed');
  }

  ngOnDestroy() {
    console.log('Red component destroyed');
  }
}