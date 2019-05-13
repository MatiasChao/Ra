import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()

export  class  PhrasesService {
    private _routerSubscription: any;

    constructor(
        //private  http:  HttpClient,
        private _route: ActivatedRoute) {
    }

    url = 'http://localhost:3000/api';

    /*
    getAllPhrases(): Observable<any[]> {
        return this.http.get<any[]>(this.url + '/phrases');
    }

    /**
    showDetailsItem(id): Observable<any[]> {
        return this.http.get<any[]>(this.url + '/items/' + id);
    }
    */
}
