import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShareData } from '../models/shareData.model';

@Injectable({
    providedIn: 'root'
})
export class MyDataService {
    private _shareData: BehaviorSubject<ShareData> = new BehaviorSubject({myData:''});

    constructor() {
    }

    public getData(): Observable<ShareData>{
        return this._shareData.asObservable();
    }
    
    public setData(newData:string):void {
        this._shareData.next({myData: newData});
    }
}