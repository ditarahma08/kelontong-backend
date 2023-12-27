import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from "mongoose"
import { User } from "./user.schema"

export type ChartDocument = Chart & Document
@Schema()
export class Chart {
    @Prop({ required: true, type: [String] })
    labels: string[]
    @Prop({ required: true, type: [Number]})
    datasets: number[]
    @Prop({ requierd: true })
    color: string
    @Prop({ required: true})
    score: number
    @Prop({ required: true })
    scoreChange: number
    @Prop({ required: true })
    userId: string
}

export const ChartSchema = SchemaFactory.createForClass(Chart)