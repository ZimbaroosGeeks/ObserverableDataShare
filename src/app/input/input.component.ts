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

  public dataChange(event): void {
    console.log(event.target.value);
    this.localDataService.setData(event.target.value);
  }

  // This method is here to show how to get a value from observable and use it
  // to update the data object in the service layer. Also it show how to just update
  // one parameter value in the service data object.
  public toggleEdit(): void {
    let canUpdate:boolean = true;
    this.localDataService.getData().subscribe((data) => { 
      if (canUpdate){
        canUpdate = false;
        if (data.editMode) {
          this.localDataService.clearEdit();
        }
        else {
          this.localDataService.setEdit();
        }
      }
    });
  }
}
