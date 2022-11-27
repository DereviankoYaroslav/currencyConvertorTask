import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {catchError, delay, Observable, retry, throwError} from 'rxjs'
import { CurrencyData } from '../models/currency';


@Injectable({
   providedIn: 'root' 
})
export class CurrencyService{
    constructor(
        private http: HttpClient,
    ){}

    fetchCurrencies() : Observable<CurrencyData[]> {
        return this.http.get<CurrencyData[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', {
        });
    }
}
