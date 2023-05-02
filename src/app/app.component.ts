import { Component } from '@angular/core';
import { Person } from './modules/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-app';
  ArrObj:Person[]=[]
  AddOne(data:Person){
    console.log(data)
    this.ArrObj.push(data)
    console.log(this.ArrObj)
    }
}
