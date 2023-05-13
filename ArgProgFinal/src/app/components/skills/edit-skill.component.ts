import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit{
    skill: Skills = null;
    constructor(private sSkill: SkillService, private activatedRouter: ActivatedRoute,
      private router: Router){
    }
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
        this.sSkill.detail(id).subscribe(
          data => {
            this.skill = data;
          }, err => {
            alert("Error al modificar Skill");
            this.router.navigate(['']);
          }
        )
    }

    validarValor(valor: number): boolean {
      return valor >= 0 && valor <= 100;
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      if (this.validarValor(this.skill.porcentaje)){
      this.sSkill.update(id, this.skill).subscribe(
          data => {
            this.router.navigate(['']);
          }, err => {
            alert("Error al modificar skill");
            this.router.navigate(['']);
          }
        )
      }
      else{
        alert("Error al modificar Skill, el porcentaje debe estar entre 0 y 100");
      }
    }
  }
