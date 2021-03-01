import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/myData.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  private localDataService;
  constructor(myDataService:MyDataService) { 
    this.localDataService = myDataService;
  }

  ngOnInit(): void {
  }

  dataChange(event): void {
    console.log(event.target.value);
    this.localDataService.setData(event.target.value);
  }
}
