import { Component } from '@angular/core';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@Component({
  selector: 'app-search-bar',
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
faMagnifyingGlass=faMagnifyingGlass
}
