import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Contactform {
    contactname: string;
    contactemail: string;
    contactmessage: string;
}
@Component({
  templateUrl: './app/shared/contact.component.html'
})

export class ContactComponent implements OnInit{
    model:Contactform = new Contactform();
    hasBeenSubmitted: boolean;

    ngOnInit(){
      this.hasBeenSubmitted = false;
    }

    register(form:NgForm, event:Event){
      // .....
      event.preventDefault();
      this.hasBeenSubmitted = true;
      console.log(form.value.xyz);
    }
}
