// Type definitions for ag-grid-community v20.0.0-cg
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Column } from "../entities/column";
import { BeanStub } from "../context/beanStub";
export declare class ColumnHoverService extends BeanStub {
    private eventService;
    private columnApi;
    private gridApi;
    private selectedColumns;
    setMouseOver(columns: Column[]): void;
    clearMouseOver(): void;
    isHovered(column: Column): boolean;
}
