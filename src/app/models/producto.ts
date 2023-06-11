export class Producto{
    _id?:number;
    nombre: string;
    categoria: string; 
    stock: number;
    ubicacion: string;
    constructor(_nombre: string , _categoria: string, _stock: number , _ubicacion:string){
        this.nombre=_nombre;
        this.categoria=_categoria
        this.stock=_stock
        this.ubicacion=_ubicacion
    }
}