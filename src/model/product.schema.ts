import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop({required: true})
    name: string
    @Prop({required: true})
    width: number
    @Prop({required: true})
    length: number
    @Prop({required: true})
    height: number
    @Prop({required: true})
    weight: number
    @Prop({required: true})
    price: number
    @Prop({required: true})
    image: string
    @Prop({required: true})
    desc: string
    @Prop({required: true})
    category: string
    @Prop({required: true})
    categoryId: number
    @Prop({required: true})
    sku: string

}

export const ProductSchema = SchemaFactory.createForClass(Product)