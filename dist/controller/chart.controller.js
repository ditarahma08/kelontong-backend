"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartController = void 0;
const common_1 = require("@nestjs/common");
const chart_schema_1 = require("../model/chart.schema");
const chart_service_1 = require("../service/chart.service");
let ChartController = class ChartController {
    constructor(chartService) {
        this.chartService = chartService;
    }
    async Add(response, chart) {
        const newChart = await this.chartService.addChart(chart);
        return response.status(common_1.HttpStatus.CREATED).json({
            newChart,
            status: true
        });
    }
    async Read(id, response) {
        const chartData = await this.chartService.readChart(id);
        return response.status(common_1.HttpStatus.OK).json(chartData);
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, chart_schema_1.Chart]),
    __metadata("design:returntype", Promise)
], ChartController.prototype, "Add", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChartController.prototype, "Read", null);
ChartController = __decorate([
    (0, common_1.Controller)('/api/v1/chart'),
    __metadata("design:paramtypes", [chart_service_1.ChartService])
], ChartController);
exports.ChartController = ChartController;
//# sourceMappingURL=chart.controller.js.map