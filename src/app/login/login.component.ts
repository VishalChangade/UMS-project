import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  paramvalue:any
  constructor(private postlog:ServiceService,private active:ActivatedRoute){
    active.params.subscribe(param=>this.paramvalue=param),
    this.unlockthis()
  }


login=new FormGroup({
  email:new FormControl('',[Validators.email,Validators.required ] ),
  pwd:new FormControl('',Validators.required)
})

postData(){
  this.postlog.login(this.login.value).subscribe(res=>alert(res))
}

unlockthis(){
  this.postlog.unlock(this.paramvalue.value).subscribe(res=>console.log(res))
}


}
