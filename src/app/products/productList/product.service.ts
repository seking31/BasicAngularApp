import { Injectable } from '@angular/core';
import { IProduct } from '../product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class ProductService {
    constructor(private http: HttpClient) { }

    private productUrl = 'api/products/products.json';

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
            .pipe(
                tap(data => console.log('All: ' + JSON.stringify(data))),
            )
    }

}