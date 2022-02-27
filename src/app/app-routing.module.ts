import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { any } from 'codelyzer/util/function';
import { AppComponent } from './app.component';
import { AuthGuard } from './Auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [

  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
 // {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
