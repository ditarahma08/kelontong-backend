import { Product } from "src/model/product.schema";
import { ProductService } from "src/service/product.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    Add(response: any, product: Product): Promise<any>;
    Read(identity: any, response: any): Promise<any>;
}
