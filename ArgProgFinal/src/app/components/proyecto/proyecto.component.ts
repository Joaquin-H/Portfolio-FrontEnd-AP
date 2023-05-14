import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit{

    proyectos: Proyectos[] = [];
  
    constructor(private sProyecto: ProyectosService, private tokenService: TokenService){};
  
    isLogged = false;
  
    ngOnInit(): void {
      this.cargarProyecto();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    }
  
    
    cargarProyecto(): void{
      this.sProyecto.lista().subscribe(data => {
        this.proyectos = data.sort((a, b) => a.fecha - b.fecha);
      })
    }
  
    delete(id?: number){
      if(id != undefined){
        this.sProyecto.delete(id).subscribe(
          data => {
            this.cargarProyecto();
          }, err => {
            alert("No se pudo borrar el proyecto");
          }
        )
      }
    }
  
}
