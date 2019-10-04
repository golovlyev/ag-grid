// Type definitions for ag-grid-community v20.0.1-cg
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { StageExecuteParams } from "../../interfaces/iRowNodeStage";
export declare class SortStage {
    private gridOptionsWrapper;
    private sortService;
    private sortController;
    execute(params: StageExecuteParams): void;
    private calculateDirtyNodes;
}
