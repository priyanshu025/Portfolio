import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  projects=[
    {title:"Iota Shopping",image:"assets/iotaShopping.png",content:"It is a 3D visualization augmented reality E-commerce Application where customers can choose objects and furniture based on their real spaces.",link:"https://github.com/priyanshu025/iotaShopping"},
    {title:"NFT Market Place", image:"assets/nftMarketplace.webp",content:"It is a Blockchain project which creates a marketplace for selling and buying NFTs",link:"https://github.com/priyanshu025/NFT_MarketPlace"}
  ]
  ngOnInit(): void {
  }

}
