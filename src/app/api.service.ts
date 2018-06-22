import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from "@angular/http";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    host_url: string = "http://localhost:6699";
    constructor(private http: Http, private cookieService: CookieService) { }

    setHeader(){
        let header = new Headers();
        header.append('Access-Control-Allow-Origin', '*');
        header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, PATCH, DELETE');
        header.append('Access-Control-Allow-Headers', 'Content-type');
         header.append('Content-Type', 'multipart/form-data');
        // header.append('x-access-token','');
        let requestOptions = new RequestOptions();
        requestOptions.headers = header;
        return requestOptions;
    }

    createPost(form_data){
        console.log(form_data);
        var requestOptions: RequestOptions = this.setHeader();
        return this.http.post(this.host_url + '/post/create', form_data);
    }

    login(obj){
        return this.http.post("https://ops.viettelpost.vn/api/user/login", obj);
    }

    logout(){
        // return 'xxxxxxxxxxxxx';
        return this.cookieService.get('token');
    }

}
