import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit{
  nombreEd: string = '';
  descripcionEd: string = '';
  anioEd: number = 2000;

  constructor(private sEducacion: EducacionService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const edu = new Educacion(this.nombreEd,this.descripcionEd,this.anioEd);
    this.sEducacion.save(edu).subscribe(data=>{
      alert("Educacion agregada");
      this.router.navigate(['']);
    },err =>{
      alert("fallo al cargar la educacion");
      this.router.navigate(['']);
    }
    );
  }
}
