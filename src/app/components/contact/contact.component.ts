import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent  {
  contacts =[
    {
      name: "Media inquiries: Rick Olson,",
      email:"rolson@psrc.org",
      phone:"1-206-971-3050"
    },
    {
      name: "Project inquiries: Brian Lee,",
      email:"blee@psrc.org",
      phone:"1-206-971-3270"
    },
    {
      name: "Project inquiries: Neil Kilgren,",
      email:"nkilgren@psrc.org",
      phone:"1-206-971-3602"
    },
  ];


 }
