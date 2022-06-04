import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetaljiService } from '../detalji.service';
import { Racun } from '../models/Racun';

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {

  racun?:Racun;

  constructor(private detaljiService:DetaljiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getRacunById(id);
  }

  getRacunById(id:number):void{
      this.detaljiService.getRacuniById(id).subscribe(res =>{
        this.racun = res;
      })
  }

}
