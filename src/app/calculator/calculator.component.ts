import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  crop:string = 'Rice';
  season:string = '2018';
  premiumPercent:number = 3;
  landSize:number = 0;
  percentCovered:number = 100;
  probableYieldNiono:number = 5250;
  unitPrice:number = 75;
  insurablePercent:number = 0.85;


  getTotalCoverage(){
    var totalCoverage =  (this.percentCovered * this.landSize * this.probableYieldNiono * this.unitPrice * this.insurablePercent) / (100);
    return (Math.ceil(totalCoverage/10)*10);
  }

  getTotalPremium(){
    var totalPremium =  (this.premiumPercent * this.percentCovered * this.landSize * this.probableYieldNiono * this.unitPrice * this.insurablePercent) / (100*100);
    return (Math.ceil(totalPremium/10)*10);
  }
  
}

