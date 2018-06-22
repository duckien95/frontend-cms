import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    username: string;
    password: string;
    message: string;
    constructor(private apiSerive: ApiService, private cookieService: CookieService) { }

    ngOnInit() {
        // console.log(this.cookieService.get('token'));
    }

    login(){
        let obj = { 'username': this.username, 'password': this.password, "postoffice" : "TN2" };
        this.apiSerive.login(obj).subscribe(res => {
            // console.log(res);
            var data = JSON.parse(res["_body"]);
            console.log(data);
            this.cookieService.set('token', data.data.token);
        })
    }

    logout(){
        console.log(this.apiSerive.logout());
        this.cookieService.delete('token');
        console.log(this.cookieService.check('token'));
        console.log(this.cookieService.check('another_token'));
        // this.apiSerive.logout().subscribe( res => {
        //     console.log(res)
        // });
    }

}
