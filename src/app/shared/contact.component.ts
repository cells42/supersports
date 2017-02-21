import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

class Contact {
  contactname: string;
  contactemail: string;
  contactmessage: string;
}

@Component({
  templateUrl:'./app/shared/contact.component.html'
})

export class ContactComponent implements OnInit {
  model:Contact = new Contact();
  hasBeenSubmitted: boolean;

  ngOnInit() {
  }

  register(form:NgForm, event:Event) {
    event.preventDefault();
    this.hasBeenSubmitted = true;
  }
}
