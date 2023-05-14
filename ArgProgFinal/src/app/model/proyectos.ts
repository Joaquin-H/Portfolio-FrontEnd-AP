export class Proyectos {
    id?: number;
    descripcion: string;
    img: string;
    fecha: number;
    link: string;

    constructor(descripcion: string,imagen:string, fecha: number, link: string){
        this.descripcion = descripcion;
        this.img = imagen;
        this.fecha = fecha;
        this.link = link;
    }
}
