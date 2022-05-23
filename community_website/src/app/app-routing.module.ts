import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskReviewsComponent } from './ask-reviews/ask-reviews.component';
import { AuthGuard } from './auth.guard';
import { BaseComponent } from './base/base.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LogoutGuard } from './logout.guard';
import { PendingReviewsComponent } from './pending-reviews/pending-reviews.component';
import { PostReviewsComponent } from './post-reviews/post-reviews.component';
import { RegisterComponent } from './register/register.component';
import { SearchProductFormComponent } from './search-product-form/search-product-form.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';
import { ShowSearchedResultComponent } from './show-searched-result/show-searched-result.component';

const routes: Routes = [
  {
    path:"base",component:BaseComponent
  },
  {
     path:"register",component:RegisterComponent
  },
  {
    path: '', redirectTo: '/base', pathMatch: 'full'
  },
  {
    path:"loginForm", component:LoginUserComponent,canActivate:[LogoutGuard]
  },
  {
    path:"loggedin",component:LoggedinComponent,canActivate:[AuthGuard]
  },
  {
    path:"searchProductForm",component:SearchProductFormComponent,canActivate:[AuthGuard]
  },
  {
    path:"showSearchedResult",component:ShowSearchedResultComponent,canActivate:[AuthGuard]
  },
  {
    path:"askReviews/:code",component:AskReviewsComponent,canActivate:[AuthGuard]
  },
  {
    path:"postReviews/:code",component:PostReviewsComponent,canActivate:[AuthGuard]
  },
  {
    path:"showAllProducts",component:ShowAllProductsComponent,canActivate:[AuthGuard]
  },
  {
    path:"pendingReviews",component:PendingReviewsComponent,canActivate:[AuthGuard]
  },
  {
    path:'adminLoginForm',component:LoginAdminComponent,canActivate:[LogoutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
