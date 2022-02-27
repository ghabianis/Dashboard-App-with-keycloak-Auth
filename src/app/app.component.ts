import { Component,OnInit } from '@angular/core';
import { Hidden } from '@material-ui/core';
import { App } from './app.model';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anis Dashboard App';
  constructor(private userData:DataService){

  }
  ngOnInit() : void{
  }



}
