import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  downloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Resume/PriyanshuResume.pdf');
    link.setAttribute('download', `resume.pdf`);
    link.click();
    link.remove();
  }

}
