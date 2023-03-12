import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {
  paramValue:any
  constructor(private postlog:ServiceService){

  }

  forgot=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email])
  })
    
   
  forgotPass(){ 
    this.postlog.forgot(this.forgot.value.email).subscribe(res=>alert(res))
   
  }
}
