import { Model } from "mongoose";
import { Chart, ChartDocument } from "../model/chart.schema";
export declare class ChartService {
    private chartModel;
    constructor(chartModel: Model<ChartDocument>);
    addChart(chart: Chart): Promise<Chart>;
    readChart(id: any): Promise<Chart>;
}
