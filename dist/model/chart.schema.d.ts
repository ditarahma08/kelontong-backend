import * as mongoose from "mongoose";
export type ChartDocument = Chart & Document;
export declare class Chart {
    labels: string[];
    datasets: number[];
    color: string;
    score: number;
    scoreChange: number;
    userId: string;
}
export declare const ChartSchema: mongoose.Schema<Chart, mongoose.Model<Chart, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Chart>;
