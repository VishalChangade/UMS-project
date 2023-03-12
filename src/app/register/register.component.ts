import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';  

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
    constructor(private regi:ServiceService ){this.countryid()
   
    }

    register=new FormGroup({
      
        cityId: new FormControl(),
        countryId: new FormControl(),
        dob: new FormControl(),
        email: new FormControl('',[Validators.required,Validators.email]),
        fname:new FormControl('',Validators.required),
        gender: new FormControl(),
        lname: new FormControl('',Validators.required),
        phno:new FormControl('',[Validators.required,Validators.minLength(10)]),
        stateId:new FormControl()
    })

    

    regiUser(){
        this.regi.registerUser(this.register.value).subscribe(res=>console.log(res))
    }
    countries:any
 
    countryid(){
      this.regi.countryId().subscribe((res)=>this.countries=res)
    }

    state:any
    stateid(countryId:number){
       this.regi.stateId(countryId).subscribe(res=>this.state=res)
    }

    city:any
    cityId(stateId:number){
      this.regi.cityId(stateId).subscribe(res=>this.city=res)
    }

     emailCheck(email:any){
      this.regi.email(email).subscribe(res=>console.log(res))
     }
}


