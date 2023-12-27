import { Chart } from "../model/chart.schema";
import { ChartService } from "../service/chart.service";
export declare class ChartController {
    private readonly chartService;
    constructor(chartService: ChartService);
    Add(response: any, chart: Chart): Promise<any>;
    Read(id: any, response: any): Promise<any>;
}
