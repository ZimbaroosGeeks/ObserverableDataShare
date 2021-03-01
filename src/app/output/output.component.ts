import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/myData.service';
import { ShareData } from '../models/shareData.model';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  private localDataService:MyDataService;
  public shareData: ShareData;
  
  constructor(myDataService:MyDataService) { 
    this.localDataService = myDataService;
  }

  ngOnInit(): void {
    this.localDataService.getData().subscribe((data) => { this.shareData = data; console.log(this.shareData)});
  }

  public check():void {
    console.log("myData = " + this.shareData.myData);
  }
}
