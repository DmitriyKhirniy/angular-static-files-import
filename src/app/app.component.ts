import { Component, OnInit } from '@angular/core';
// import * as data from '../files/example.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-last-example';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get('../files/example.json')
      .subscribe((data) => {
        console.log('data: ', data);
      });
  }
}
