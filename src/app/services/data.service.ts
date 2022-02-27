import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
    })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
   baseUrl = 'http://localhost:3000/users'
   baseUrl2 = 'http://localhost:3000/profile'
  constructor(private httpClient:HttpClient) { }


   AddUser(data:any){
    return this.httpClient.post<any>(`${this.baseUrl}/`,data);
   }

   getUser(){
    return this.httpClient.get<any>(this.baseUrl);
   }
   DeleteUser(id:any){
    return this.httpClient.delete<any>(`${this.baseUrl}/`+id);
   }
   UpdateUser(){
    return this.httpClient.get<any>(this.baseUrl);
   }
   getUserById(id:any){
    return this.httpClient.get<any>(`${this.baseUrl}/`+id);
   }
   updateUser(id:any,data:any){
     return this.httpClient.patch<any>(`${this.baseUrl}/`+id,data);
   }

   updateProfile(data:any){
     return this.httpClient.post<any>(`${this.baseUrl2}/`,data,optionRequete);
   }
   getProfileInfo(){
    return this.httpClient.get<any>(this.baseUrl2);
   }
}
