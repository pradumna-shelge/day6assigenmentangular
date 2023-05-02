import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../modules/user';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() send = new EventEmitter();
  id!:number
name!:string
dept!:string
pm!:string
rh!:string

check:string=''

add(){
  if(isNaN(this.id)){
    this.check="set"
  }
  else{
    let obj={id:this.id,name:this.name, department:this.dept,projectmanager:this.pm,reportinghead:this.rh}
    this.send.emit(obj)
    this.id++;
    this.name=''
    this.dept=''
    this.pm=''
    this.rh=''
  }

}
}
