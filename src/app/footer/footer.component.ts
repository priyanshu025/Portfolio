import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  icons=[
    {title:"facebook",icon:"fab fa-facebook",link:"https://www.facebook.com/"},
    {title:"github",icon:"fab fa-github",link:"https://github.com/priyanshu025"},
    {title:"linkedIn",icon:"fab fa-linkedin",link:"https://www.linkedin.com/in/priyanshu-kumar-3260551ab/"},
    {title:"gmail",icon:"fab fa-google",link:"https://www.gmail.com/"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
