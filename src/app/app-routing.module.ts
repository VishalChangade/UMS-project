import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';

const routes: Routes = [ {
  path:'register',
  component:RegisterComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'unlockAcc',
  component:UnlockAccountComponent
},
{
  path:'forgotPass',
  component:ForgotPassComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
