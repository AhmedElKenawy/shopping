import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../../models";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";


@Injectable()

export class ProductService {
    constructor(private httpClient: HttpClient) { }

    createProducts(product: Product): Observable<Product> {
        return this.httpClient.post<Product>(environment.baseUrl + '/products', product)
    }
    getProduct(id: string) {
        return this.httpClient.get<Product>(`${environment.baseUrl}/products/${id}`)
    }

    getProducts(category: string | null = null): Observable<Product[]> {
        let url = 'products'
        if (category && category !== 'All') {
            url = `${url}/category/${category}`
        }
        return this.httpClient.get<Product[]>(`${environment.baseUrl}/${url}`)
    }

    updateProducts(product: Product): Observable<Product> {
        const {id} = product ;
        delete product.id;
        return this.httpClient.patch<Product>(`${environment.baseUrl}/products/${id}`, product)
    }

    deleteProduct(productId: string) {
        return this.httpClient.delete(`${environment.baseUrl}/products/${productId}`,)
    }

}