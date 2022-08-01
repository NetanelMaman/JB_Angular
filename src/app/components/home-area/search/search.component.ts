import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public tooltip = "Search"
public textToSearch="";

public searchWebsite(args: Event): void {
    console.log(args);
    alert("Searching for " + this.textToSearch);
    this.textToSearch ="blaaaa";
}
  constructor() { }

  ngOnInit(): void {
  }

}
