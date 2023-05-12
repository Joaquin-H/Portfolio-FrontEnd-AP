export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    anioE: number; 

    constructor(nombreE: string,descripcionE: string, anioE: number){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.anioE = anioE;
    }
}
