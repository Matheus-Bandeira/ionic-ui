import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { CategoriaDTO } from "../../models/categoria.dto";

@Injectable()
export class CategoriaService {

    constructor(http: HttpClient){
    }

    findAll(): Observable<CategoriaDTO[]>{

    }
}