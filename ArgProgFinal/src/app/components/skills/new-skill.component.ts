import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit{

    nombre: string = '';
    porcentaje: number = 0;
  
    constructor(private sSkill: SkillService, private router: Router){
  
    }
    ngOnInit(): void {
      
    }
  
    validarValor(valor: number): boolean {
      return valor >= 0 && valor <= 100;
    }

    onCreate(): void{
      const skill = new Skills(this.nombre,this.porcentaje);
      if (this.validarValor(this.porcentaje) == true){
        this.sSkill.save(skill).subscribe(data=>{
          alert("Skill agregada");
          this.router.navigate(['']);
        },err =>{
          alert("fallo");
          this.router.navigate(['']);
        }
        );
      }
      else{
        alert("el porcentaje debe estar entre 0 y 100");
      }
    }
}
