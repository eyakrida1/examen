import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book-service';

@Component({
  selector: 'app-wish-list',
  imports: [],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList {
bookService=inject(BookService)
router = inject(Router)
  // navigateTo(key:string){
  //   this.router.navigate(['', key])
  // }

  navigateTo(key: string) {
  // Assure que key ne contient pas '/works/'
  const cleanedKey = key.replace('/works/', '');
  this.router.navigate(['book', cleanedKey]); // <-- /book/<key>
}
}
