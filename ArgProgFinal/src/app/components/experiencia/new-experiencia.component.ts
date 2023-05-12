import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { Router } from '@angular/router';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{

  nombreE: string = '';
  descripcionE: string = '';
  anioE: number = 2000;

  constructor(private sExperiencia: SExperienciaService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE,this.descripcionE,this.anioE);
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Experiencia agregada");
      this.router.navigate(['']);
    },err =>{
      alert("fallo");
      this.router.navigate(['']);
    }
    );
  }


}
