import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Chart, ChartDocument } from "../model/chart.schema";

@Injectable()
export class ChartService {
    constructor(@InjectModel(Chart.name) private chartModel: Model<ChartDocument>,
    ) { }

    async addChart(chart: Chart): Promise<Chart> {
        const reqBody = {
            labels: chart.labels,
            datasets: chart.datasets,
            color: chart.color,
            score: chart.score,
            scoreChange: chart.scoreChange,
            userId: chart.userId
        }
        const newChart = new this.chartModel(reqBody);
        return newChart.save();
    }

    async readChart(id): Promise<Chart> {
        const foundChart =  await this.chartModel.findOne({ userId: id }).exec()
        return foundChart
    }
}