import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseurl='http://15.206.171.20:9090'

  constructor(private http:HttpClient) { }


  registerUser(body:any){
    return this.http.post(`${this.baseurl}/saveUser`,body,{responseType:'text'})
  }

  countryId(){
    return this.http.get(`${this.baseurl}/countries`)
  }
  
  stateId(countryId:number){
    return this.http.get(`${this.baseurl}/states/${countryId}`)
  }

  cityId(stateId:number){
    return this.http.get(`${this.baseurl}/cities/${stateId}`)
  }
   
  email(email:any){
    return this.http.get(`${this.baseurl}/emailcheck/${email}`)
  }

  unlock(unlockAccForm:any){
    return this.http.post(`${this.baseurl}/unlock`,unlockAccForm,{responseType:'text'})
  }

  login(loginForm:any){
    return this.http.post(`${this.baseurl}/login`,loginForm,{responseType:'text'})
  }
  
  forgot(emailId:any){
    return this.http.get(`${this.baseurl}/forgotPwd/${emailId}`,{responseType:'text'})
  }
}

