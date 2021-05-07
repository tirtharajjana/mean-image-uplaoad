import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Profile } from '../../models/Profile'

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  form!:FormGroup ;
  profile: Profile | undefined;
  imageData:string |undefined;
  

  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
        name:new FormControl(null),
        image:new FormControl(null)
    })
  }

  onFileSelect(event:Event){
    console.log("file Selected");
    
  }

  onSubmit(){
    console.log("Submit Profile");
    
  }

}
