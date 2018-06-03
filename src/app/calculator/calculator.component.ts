import { Component, OnInit } from '@angular/core';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';


interface Zone {
  name:string;
  expectedYield:number;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})


export class CalculatorComponent implements OnInit {

  constructor() { }

  crop:string = 'Riz';
  season:string = '2018';
  premiumPercent:number = 3.0;
  landSize:number = 0;
  unitPrice:number = 75;
  insurablePercent:number = 0.85;
  tax:number = 20;
  zones:Zone[] = [
    {name:"Ke-Macina", expectedYield: 6332},
    {name:"Kolongo", expectedYield: 6426},
    {name:"Molondo", expectedYield: 6096},
    {name:"Kouroumari", expectedYield: 6519},
    {name:"M'Bewani", expectedYield: 6234},
    {name:"N'Debougou", expectedYield: 5713},
    {name:"Niono", expectedYield: 6182}

  ]
  zone: Zone = {name:"", expectedYield:null} ;

  ngOnInit() {

  }

  getTotalCoverage(){
    if(this.zone.expectedYield)
    {
      var totalCoverage =  ( this.landSize * this.zone.expectedYield * this.unitPrice * this.insurablePercent);
      return (Math.ceil(totalCoverage/10)*10);
    }
  }

  getTotalPremium(){
    if(this.zone.expectedYield)
    {
      var totalPremium =  (this.premiumPercent * this.landSize * this.zone.expectedYield * this.unitPrice * this.insurablePercent) / (100);
      return (Math.ceil(totalPremium/10)*10);
    }
  }

  getTotalPremiumWithTax() {
    if(this.zone.expectedYield)
    {
      var totalPremiumWithTax = this.getTotalPremium() * (100+this.tax)/100;
      return totalPremiumWithTax;
    }
  }
  
}

