import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  skills: Skills[] = [];

  constructor(private sSkill: SkillService, private tokenService: TokenService){};

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.sSkill.lista().subscribe(data => {
      this.skills = data.sort((a, b) => b.porcentaje - a.porcentaje);
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.sSkill.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}
