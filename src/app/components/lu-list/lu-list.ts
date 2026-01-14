import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book-service';

@Component({
  selector: 'app-lu-list',
  imports: [],
  templateUrl: './lu-list.html',
  styleUrl: './lu-list.css',
})
export class LuList {
bookService=inject(BookService)
router = inject(Router)
  navigateTo(key: string) {
  // Assure que key ne contient pas '/works/'
  const cleanedKey = key.replace('/works/', '');
  this.router.navigate(['book', cleanedKey]); // <-- /book/<key>
}}
