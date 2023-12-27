import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { response } from "express";
import { Chart } from "../model/chart.schema";
import { ChartService } from "../service/chart.service";

@Controller('/api/v1/chart')
export class ChartController {
    constructor(private readonly chartService: ChartService) {}

    @Post('/add')
    async Add(@Res() response, @Body() chart: Chart) {
        const newChart = await this.chartService.addChart(chart)
        return response.status(HttpStatus.CREATED).json({
            newChart,
            status: true
        })
    }

    @Get('/:id')
    async Read(@Param('id') id, @Res() response) {
        const chartData = await this.chartService.readChart(id)
        return response.status(HttpStatus.OK).json(chartData)
    }
}