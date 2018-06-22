import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: 'manage',
        children: [
            { path: '', component: AppComponent },
            { path: 'post', component:  PostComponent}
            // { path: 'exploit', component:  }
        ]
    },
    { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
