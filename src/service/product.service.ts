import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "src/model/product.schema";

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel:
    Model<ProductDocument>, ) {}

    async addProduct(product: Product): Promise<Product> {
        const reqBody = {
            name: product.name,
            width: product.width,
            length: product.length,
            height: product.height,
            weight: product.weight,
            price: product.price,
            image: product.image,
            desc: product.desc,
            category: product.category,
            categoryId: product.categoryId,
            sku: product.sku
        }

        const newProduct = new this.productModel(reqBody)
        return newProduct.save()
    }

    async getProductList(): Promise<Product[]> {
        const productList = await this.productModel.find().exec()
        return productList
    }
}