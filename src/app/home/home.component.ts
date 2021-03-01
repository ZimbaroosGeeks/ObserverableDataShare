import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/myData.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private localDataService: MyDataService;

  constructor(myDataService:MyDataService) {
    this.localDataService = myDataService;
   }

  ngOnInit(): void {
  }

}
