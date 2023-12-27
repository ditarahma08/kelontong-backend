import { Model } from "mongoose";
import { Product, ProductDocument } from "src/model/product.schema";
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    addProduct(product: Product): Promise<Product>;
    getProductList(): Promise<Product[]>;
}
