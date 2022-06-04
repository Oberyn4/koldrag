import { Component, OnInit } from '@angular/core';
import { Racun } from '../models/Racun';
import { RacuniService } from '../racuni.service';

@Component({
  selector: 'app-racuni',
  templateUrl: './racuni.component.html',
  styleUrls: ['./racuni.component.css']
})
export class RacuniComponent implements OnInit {

  racuni?:Racun[];

  constructor(private racunService:RacuniService) { }

  ngOnInit(): void {
    this.racunService.getRacuni().subscribe(data => {
      this.racuni = data;
      console.log(data);
    });
  }

}
