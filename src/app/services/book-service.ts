import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../interfaces/Book.ts';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root',
})
export class BookService {
  
private apiUrl = 'https://openlibrary.org/subjects/computers.json';

private http=inject(HttpClient)
public bookList:Book[]=[]
  public wishList:Book[]=[]
  public LuList:Book[]=[]

getBooks(): Observable<Book[]> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => response.works)
    );
  }





  //  getBooks(): Observable<Book[]> {
  //   return this.http.get(this.apiUrl).pipe(
  //     map((response: any) => {
  //       console.log('Réponse API complète :', response);
  //       console.log('Liste des livres (works) :', response.works);
  //       return response.works;
  //     })
  //   );
  // }

// getBookById(id: string): Observable<Book> {
//   return this.http.get(
//     `https://openlibrary.org/works/${id}.json`
//   ).pipe(
//     map((response: any) => {
//       console.log('Détails du livre :', response);
//       return response;
//     })
//   );
// }

getBookById(id: string): Observable<Book> {
  return this.http.get(
    `https://openlibrary.org/works/${id}.json`
  ).pipe(
    map((response: any) => response)
  );
}


}
