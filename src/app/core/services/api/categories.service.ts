import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable()

export class CategoriesService {
    constructor( private httpClient : HttpClient) { }

    getAllCategories() : Observable<string[]> {
        return this.httpClient.get<string[]>(`${environment.baseUrl}/products/categories`  )
    }
    
}