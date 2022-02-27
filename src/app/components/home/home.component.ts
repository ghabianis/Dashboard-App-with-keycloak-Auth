import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { DataService } from 'src/app/services/data.service';
import { HOME } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logged= false;
  data:any
  userName:any
  user= new  HOME();
  update= false;
  add= false;
  sel : any
  fullName:any
  firstName :any
  lastName:any

  constructor(private userData:DataService,private keycloak:KeycloakService){

  }
  ngOnInit() : void{
   this.getUsers();
   this.getUserInfo()
  }


  getUsers(){
    this.userData.getUser().subscribe(e=>{
     return this.data=e;
    });
  }

  onSubmit(){
   this.userData.AddUser(this.user).subscribe(e=>{
    window.location.reload();
   })
  }

  deleteUser(id:any){
   this.userData.DeleteUser(id).subscribe(e=>{
     window.location.reload();

   })
  }

  getUser(id:any){
    this.userData.getUserById(id).subscribe(e=>{
    this.user = e;
    })
  }

  updateUser(id:any,data:any){
    this.userData.updateUser(id,data).subscribe(e=>{
      alert('updated successfully');
      window.location.reload();
    })
  }




  upda(){
   this.add = true
   this.update = false
  }
  addd(){
    this.update = true
    this.add = false
  }

  logout(){
    this.keycloak.logout('http://localhost:4200');
  }

  check(){
    if((this.keycloak.isLoggedIn)){
      this.logged= true;
    }
  }

  async getUserInfo(){
    this.data = await this.keycloak.loadUserProfile();
    this.userName=this.data.username;
    this.lastName=this.data.lastName;
    this.firstName = this.data.firstName;
    this.fullName = this.lastName +' '+ this.firstName;

   }
}
