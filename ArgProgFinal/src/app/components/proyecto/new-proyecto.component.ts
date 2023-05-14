import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit{
  descripcion: string = '';
  img: string = '';
  fecha: number = 2000;
  link: string = '';

  constructor(private sProyecto: ProyectosService, private router: Router,
    public imageService: ImageService){
  }

  ngOnInit(): void {
    
  }

  habilitar(): void{
    var descripcion = document.getElementById("descripcion") as HTMLInputElement;
    var imag = document.getElementById("img") as HTMLInputElement;
    if (descripcion.value != "") {
      imag.disabled = false;
    } else {
      imag.disabled = true;
    }
  }

  uploadImage($event:any){
    let desc = (<HTMLInputElement>document.getElementById("descripcion")).value;
    const name = "proyecto_" + desc;
    this.imageService.uploadImage($event,name)
  }

  onCreate(): void{
    this.img = this.imageService.url
    const proy = new Proyectos(this.descripcion,this.img,this.fecha,this.link);
    this.sProyecto.save(proy).subscribe(data=>{
      alert("Proyecto agregado");
      this.router.navigate(['']);
    },err =>{
      alert("fallo al cargar el proyecto");
      this.router.navigate(['']);
    }
    );
  }

}
