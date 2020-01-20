// Type definitions for ag-grid-community v20.0.3-cg
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
export declare class Environment {
    private eGridDiv;
    private gridSize;
    private iconSize;
    private sassVariables;
    loadSassVariables(): void;
    getSassVariable(theme: string, key: string): number;
    getTheme(): string;
}
