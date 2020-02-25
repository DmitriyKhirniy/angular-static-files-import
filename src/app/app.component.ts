import { Component, OnInit } from '@angular/core';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-last-example';

  constructor(private service: AppDataService) {}

  ngOnInit(): void {
    this.service.getData()
      .subscribe((data) => {
        console.log('data: ', data);
      });
  }
}
