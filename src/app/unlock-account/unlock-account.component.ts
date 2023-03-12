import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {
  constructor(private unlockF:ServiceService){}

  unlockFrom=new FormGroup({
    email:new FormControl('',[Validators.required]),
    tempPwd:new FormControl(),
    newPwd:new FormControl(),
    confirmPwd:new FormControl('',[Validators.required])
  })

  unlockthis(){
    this.unlockF.unlock(this.unlockFrom.value).subscribe(res=>console.log(res))
  }
}
