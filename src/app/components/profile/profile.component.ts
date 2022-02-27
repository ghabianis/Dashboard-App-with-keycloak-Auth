import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { DataService } from 'src/app/services/data.service';
import { PROFILE } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  logged= false;
  data:any
  userName:any
  update= false;
  add= false;
  sel : any
  fullName:any
  firstName :any
  lastName:any
  selectedFile!: File;
  profile = new PROFILE();



  name:any;
  role:any;
  education:any;
  location:any;
  skills:any;
  notes:any;
  experiences:any;
  image:any;
  id:any
  constructor(private keyclaok:KeycloakService,private dataSerice:DataService ,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getUserInfo()
    this. getProfileInfo()
  }


  async getUserInfo(){
    this.data = await this.keyclaok.loadUserProfile();
    this.userName=this.data.username;
    this.lastName=this.data.lastName;
    this.firstName = this.data.firstName;
    this.fullName = this.lastName +' '+ this.firstName;

   }
   check(){
    if((this.keyclaok.isLoggedIn)){
      this.logged= true;
    }
  }
  logout(){
    this.keyclaok.logout('http://localhost:4200');
  }


  onSubmit(){
   this.dataSerice.updateProfile(this.profile).subscribe(e=>{
    alert('user Info Added')
    window.location.reload();
  })
  }

 getProfileInfo(){
 this.dataSerice.getProfileInfo().subscribe(e=>{
      this.data = e
    })
  }





  onFileSelected(event:any){
  this.selectedFile= <File>event.target.files[0];
  }
  onUpload(){
    const fd = new FormData();
    fd.append('image',this.selectedFile);
    console.log(fd);
    this.httpClient.post('http://localhost:3000/im',fd).subscribe(e=>{
      console.log(e)
    })
  }
}
