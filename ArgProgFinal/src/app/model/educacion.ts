export class Educacion {
        id? : number;
        nombreEd : string;
        descripcionEd : string;
        anioEd: number; 
    
        constructor(nombreEd: string,descripcionEd: string, anioEd: number){
            this.nombreEd = nombreEd;
            this.descripcionEd = descripcionEd;
            this.anioEd = anioEd;
        }
}
