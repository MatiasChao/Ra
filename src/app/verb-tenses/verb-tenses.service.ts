import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()

export  class  TensesService {
    private _routerSubscription: any;

    constructor(
        private  http:  HttpClient,
        private _route: ActivatedRoute) {

           // this.mostra();
    }

    url = 'http://localhost:3000/api';
    /*
    getAllPhrases() {
        return this.http.get(this.url + '/verbstenses');
    }

    searchProducts(): Observable<any[]> {
        return this.http.get<any[]>(this.url + '/phrases');
    }

    mostra() {
        this.http
        .get('http://localhost:3000/api/phrases')
        .subscribe(
          data => console.log('success', data),
          error => console.log('oops', error)
        );
    }

     /**
    showDetailsItem(id): Observable<any[]> {
        return this.http.get<any[]>(this.url + '/items/' + id);
    }
    */
}
