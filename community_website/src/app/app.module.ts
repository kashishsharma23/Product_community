import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { HeaderComponent } from './header/header.component';
import { SearchProductFormComponent } from './search-product-form/search-product-form.component';
import { ShowSearchedResultComponent } from './show-searched-result/show-searched-result.component';
import { AskReviewsComponent } from './ask-reviews/ask-reviews.component';
import { PostReviewsComponent } from './post-reviews/post-reviews.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';
import { PendingReviewsComponent } from './pending-reviews/pending-reviews.component';
import { LoginAdminComponent } from './login-admin/login-admin.component'
@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    RegisterComponent,
    LoginUserComponent,
    LoggedinComponent,
    HeaderComponent,
    SearchProductFormComponent,
    ShowSearchedResultComponent,
    AskReviewsComponent,
    PostReviewsComponent,
    ShowAllProductsComponent,
    PendingReviewsComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
