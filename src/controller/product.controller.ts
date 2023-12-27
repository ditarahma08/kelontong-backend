import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { Product } from "src/model/product.schema";
import { ProductService } from "src/service/product.service";

@Controller('api/v1/product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post('/add')
    async Add(@Res() response, @Body() product: Product) {
        const newProduct = await this.productService.addProduct(product)
        return response.status(HttpStatus.CREATED).json({
            newProduct,
            status: true
        })
    }

    @Get()
    async Read(@Param('id') identity, @Res() response) {
        const productData = await this.productService.getProductList()
        return response.status(HttpStatus.OK).json(productData)
    }
}