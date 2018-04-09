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
  percentCovered:number = 85;
  probableYieldNiono:number = 6182;
  unitPrice:number = 75;


  getTotalCoverage(){
    return  (this.percentCovered * this.landSize * this.probableYieldNiono * this.unitPrice) / (100);
  }

  getTotalPremium(){
    return  (this.premiumPercent * this.percentCovered * this.landSize * this.probableYieldNiono * this.unitPrice) / (100*100);
  }

}
