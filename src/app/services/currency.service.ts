import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {catchError, delay, Observable, retry, throwError} from 'rxjs'
import { MyCurrency } from '../models/currency';


@Injectable({
   providedIn: 'root' 
})
export class CurrencyService{
    constructor(
        private http: HttpClient,
    ) { 
    }

    getAll() : Observable<MyCurrency[]> {
        return this.http.get<MyCurrency[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', {
        });
    }

}
