import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShareData } from '../models/shareData.model';

@Injectable({
    providedIn: 'root'
})
export class MyDataService {
    private curShareData: ShareData = {myData:'', editMode:false};;
    private _shareData: BehaviorSubject<ShareData> = new BehaviorSubject(this.curShareData);
    
    constructor() {
    }

    public getData(): Observable<ShareData>{
        return this._shareData.asObservable();
    }
    
    public setData(newData:string):void {
        this.curShareData.myData = newData;
        this._shareData.next(this.curShareData);
    }

    public setEdit(): void {
        this.curShareData.editMode = true;
        this._shareData.next(this.curShareData);
    }

    public clearEdit(): void {
        this.curShareData.editMode = false;
        this._shareData.next(this.curShareData);
    }
}