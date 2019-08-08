// Type definitions for ag-grid-community v20.0.0-cg
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ColumnGroup } from "../entities/columnGroup";
import { Column } from "../entities/column";
import { ColDef, ColGroupDef, IAggFunc } from "../entities/colDef";
import { ColumnGroupChild } from "../entities/columnGroupChild";
import { OriginalColumnGroupChild } from "../entities/originalColumnGroupChild";
import { ColumnEventType } from "../events";
import { OriginalColumnGroup } from "../entities/originalColumnGroup";
import { RowNode } from "../entities/rowNode";
export interface ColumnResizeSet {
    columns: Column[];
    ratios: number[];
    width: number;
}
export interface ColumnState {
    colId: string;
    hide?: boolean;
    aggFunc?: string | IAggFunc | null;
    width?: number;
    pivotIndex?: number | null;
    pinned?: boolean | string | "left" | "right";
    rowGroupIndex?: number | null;
}
export declare class ColumnController {
    private gridOptionsWrapper;
    private expressionService;
    private columnFactory;
    private displayedGroupCreator;
    private autoWidthCalculator;
    private eventService;
    private columnUtils;
    private context;
    private columnAnimationService;
    private autoGroupColService;
    private aggFuncService;
    private valueCache;
    private columnApi;
    private gridApi;
    private primaryColumnTree;
    private primaryHeaderRowCount;
    private primaryColumns;
    private secondaryBalancedTree;
    private secondaryColumns;
    private secondaryHeaderRowCount;
    private secondaryColumnsPresent;
    private columnsForQuickFilter;
    private gridBalancedTree;
    private gridColumns;
    private gridHeaderRowCount;
    private lastPrimaryOrder;
    private gridColsArePrimary;
    private displayedLeftColumnTree;
    private displayedRightColumnTree;
    private displayedCentreColumnTree;
    private displayedLeftHeaderRows;
    private displayedRightHeaderRows;
    private displayedCentreHeaderRows;
    private displayedLeftColumns;
    private displayedRightColumns;
    private displayedCenterColumns;
    private allDisplayedColumns;
    private allDisplayedVirtualColumns;
    private allDisplayedCenterVirtualColumns;
    private colSpanActive;
    private autoRowHeightColumns;
    private suppressColumnVirtualisation;
    private rowGroupColumns;
    private valueColumns;
    private pivotColumns;
    private groupAutoColumns;
    private groupDisplayColumns;
    private ready;
    private logger;
    private autoGroupsNeedBuilding;
    private pivotMode;
    private usingTreeData;
    private scrollWidth;
    private scrollPosition;
    private bodyWidth;
    private leftWidth;
    private rightWidth;
    private bodyWidthDirty;
    private viewportLeft;
    private viewportRight;
    private columnDefs;
    init(): void;
    setColumnDefs(columnDefs: (ColDef | ColGroupDef)[], source?: ColumnEventType): void;
    isAutoRowHeightActive(): boolean;
    getAllAutoRowHeightCols(): Column[];
    private setVirtualViewportLeftAndRight;
    getDisplayedColumnsStartingAt(column: Column): Column[];
    private checkDisplayedVirtualColumns;
    setVirtualViewportPosition(scrollWidth: number, scrollPosition: number): void;
    isPivotMode(): boolean;
    private isPivotSettingAllowed;
    setPivotMode(pivotMode: boolean, source?: ColumnEventType): void;
    getSecondaryPivotColumn(pivotKeys: string[], valueColKey: Column | string): Column | null;
    private setBeans;
    private setFirstRightAndLastLeftPinned;
    autoSizeColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    autoSizeColumn(key: string | Column | null, source?: ColumnEventType): void;
    autoSizeAllColumns(source?: ColumnEventType): void;
    private getColumnsFromTree;
    getAllDisplayedColumnGroups(): ColumnGroupChild[] | null;
    getPrimaryColumnTree(): OriginalColumnGroupChild[];
    getHeaderRowCount(): number;
    getLeftDisplayedColumnGroups(): ColumnGroupChild[];
    getRightDisplayedColumnGroups(): ColumnGroupChild[];
    getCenterDisplayedColumnGroups(): ColumnGroupChild[];
    getDisplayedColumnGroups(type: string): ColumnGroupChild[];
    isColumnDisplayed(column: Column): boolean;
    getAllDisplayedColumns(): Column[];
    getAllDisplayedVirtualColumns(): Column[];
    getDisplayedLeftColumnsForRow(rowNode: RowNode): Column[];
    getDisplayedRightColumnsForRow(rowNode: RowNode): Column[];
    private getDisplayedColumnsForRow;
    getAllDisplayedCenterVirtualColumnsForRow(rowNode: RowNode): Column[];
    private isColumnInViewport;
    getPinnedLeftContainerWidth(): number;
    getPinnedRightContainerWidth(): number;
    updatePrimaryColumnList(keys: (string | Column)[] | null, masterList: Column[], actionIsAdd: boolean, columnCallback: (column: Column) => void, eventType: string, source?: ColumnEventType): void;
    setRowGroupColumns(colKeys: (string | Column)[], source?: ColumnEventType): void;
    private setRowGroupActive;
    addRowGroupColumn(key: string | Column | null, source?: ColumnEventType): void;
    addRowGroupColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    removeRowGroupColumns(keys: (string | Column)[] | null, source?: ColumnEventType): void;
    removeRowGroupColumn(key: string | Column | null, source?: ColumnEventType): void;
    addPivotColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    setPivotColumns(colKeys: (string | Column)[], source?: ColumnEventType): void;
    addPivotColumn(key: string | Column, source?: ColumnEventType): void;
    removePivotColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    removePivotColumn(key: string | Column, source?: ColumnEventType): void;
    private setPrimaryColumnList;
    setValueColumns(colKeys: (string | Column)[], source?: ColumnEventType): void;
    private setValueActive;
    addValueColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    addValueColumn(colKey: (string | Column) | null | undefined, source?: ColumnEventType): void;
    removeValueColumn(colKey: (string | Column), source?: ColumnEventType): void;
    removeValueColumns(keys: (string | Column)[], source?: ColumnEventType): void;
    private normaliseColumnWidth;
    private getPrimaryOrGridColumn;
    setColumnWidth(key: string | Column, // @key - the column who's size we want to change
    newWidth: number, // @newWidth - width in pixels
    shiftKey: boolean, // @takeFromAdjacent - if user has 'shift' pressed, then pixels are taken from adjacent column
    finished: boolean, // @finished - ends up in the event, tells the user if more events are to come
    source?: ColumnEventType): void;
    private checkMinAndMaxWidthsForSet;
    resizeColumnSets(resizeSets: ColumnResizeSet[], finished: boolean, source: ColumnEventType): void;
    setColumnAggFunc(column: Column | null | undefined, aggFunc: string, source?: ColumnEventType): void;
    moveRowGroupColumn(fromIndex: number, toIndex: number, source?: ColumnEventType): void;
    moveColumns(columnsToMoveKeys: (string | Column)[], toIndex: number, source?: ColumnEventType): void;
    doesMovePassRules(columnsToMove: Column[], toIndex: number): boolean;
    doesMovePassLockedPositions(proposedColumnOrder: Column[]): boolean;
    doesMovePassMarryChildren(allColumnsCopy: Column[]): boolean;
    moveColumn(key: string | Column, toIndex: number, source?: ColumnEventType): void;
    moveColumnByIndex(fromIndex: number, toIndex: number, source?: ColumnEventType): void;
    getBodyContainerWidth(): number;
    getContainerWidth(pinned: string): number;
    private updateBodyWidths;
    getValueColumns(): Column[];
    getPivotColumns(): Column[];
    isPivotActive(): boolean;
    getRowGroupColumns(): Column[];
    getDisplayedCenterColumns(): Column[];
    getDisplayedLeftColumns(): Column[];
    getDisplayedRightColumns(): Column[];
    getDisplayedColumns(type: string): Column[];
    getAllPrimaryColumns(): Column[] | null;
    getSecondaryColumns(): Column[] | null;
    getAllColumnsForQuickFilter(): Column[];
    getAllGridColumns(): Column[];
    isEmpty(): boolean;
    isRowGroupEmpty(): boolean;
    setColumnVisible(key: string | Column, visible: boolean, source?: ColumnEventType): void;
    setColumnsVisible(keys: (string | Column)[], visible: boolean, source?: ColumnEventType): void;
    setColumnPinned(key: string | Column | null, pinned: string | boolean | null, source?: ColumnEventType): void;
    setColumnsPinned(keys: (string | Column)[], pinned: string | boolean | null, source?: ColumnEventType): void;
    private actionOnGridColumns;
    getDisplayedColBefore(col: Column): Column | null;
    getDisplayedColAfter(col: Column): Column | null;
    getDisplayedGroupAfter(columnGroup: ColumnGroup): ColumnGroup | null;
    isPinningLeft(): boolean;
    isPinningRight(): boolean;
    getPrimaryAndSecondaryAndAutoColumns(): Column[];
    private createStateItemFromColumn;
    getColumnState(): ColumnState[];
    private orderColumnStateList;
    resetColumnState(source?: ColumnEventType): void;
    setColumnState(columnState: ColumnState[], source?: ColumnEventType): boolean;
    private raiseColumnEvents;
    private raiseColumnPinnedEvent;
    private raiseColumnVisibleEvent;
    private raiseColumnResizeEvent;
    private raiseColumnMovedEvent;
    private sortColumnListUsingIndexes;
    private syncColumnWithNoState;
    private syncColumnWithStateItem;
    getGridColumns(keys: (string | Column)[]): Column[];
    private getColumns;
    getColumnWithValidation(key: string | Column): Column | null;
    getPrimaryColumn(key: string | Column): Column | null;
    getGridColumn(key: string | Column): Column | null;
    private getColumn;
    private getAutoColumn;
    private columnsMatch;
    getDisplayNameForColumn(column: Column | null, location: string | null, includeAggFunc?: boolean): string | null;
    getDisplayNameForOriginalColumnGroup(columnGroup: ColumnGroup | null, originalColumnGroup: OriginalColumnGroup | null, location: string): string | null;
    getDisplayNameForColumnGroup(columnGroup: ColumnGroup, location: string): string | null;
    private getHeaderName;
    private wrapHeaderNameWithAggFunc;
    getColumnGroup(colId: string | ColumnGroup, instanceId?: number): ColumnGroup | null;
    isReady(): boolean;
    private createValueColumns;
    private extractRowGroupColumns;
    private extractColumns;
    private extractPivotColumns;
    resetColumnGroupState(source?: ColumnEventType): void;
    getColumnGroupState(): {
        groupId: string;
        open: boolean;
    }[];
    setColumnGroupState(stateItems: {
        groupId: string;
        open: boolean | undefined;
    }[], source?: ColumnEventType): void;
    setColumnGroupOpened(key: OriginalColumnGroup | string | undefined, newValue: boolean, source?: ColumnEventType): void;
    getOriginalColumnGroup(key: OriginalColumnGroup | string): OriginalColumnGroup | null;
    private calculateColumnsForDisplay;
    private checkColSpanActiveInCols;
    private calculateColumnsForGroupDisplay;
    getGroupDisplayColumns(): Column[];
    private updateDisplayedColumns;
    isSecondaryColumnsPresent(): boolean;
    setSecondaryColumns(colDefs: (ColDef | ColGroupDef)[] | null, source?: ColumnEventType): void;
    private processSecondaryColumnDefinitions;
    private updateGridColumns;
    private orderGridColsLikeLastPrimary;
    isPrimaryColumnGroupsPresent(): boolean;
    private setupQuickFilterColumns;
    private putFixedColumnsFirst;
    private addAutoGroupToGridColumns;
    private clearDisplayedColumns;
    private updateGroupsAndDisplayedColumns;
    private updateDisplayedColumnsFromTrees;
    private setupAllDisplayedColumns;
    private setLeftValues;
    private setLeftValuesOfColumns;
    private setLeftValuesOfGroups;
    private addToDisplayedColumns;
    private updateDisplayedCenterVirtualColumns;
    getVirtualHeaderGroupRow(type: string, dept: number): ColumnGroupChild[];
    private updateDisplayedVirtualGroups;
    private updateVirtualSets;
    private filterOutColumnsWithinViewport;
    sizeColumnsToFit(gridWidth: any, source?: ColumnEventType): void;
    private buildDisplayedTrees;
    private updateOpenClosedVisibilityInColumnGroups;
    getGroupAutoColumns(): Column[] | null;
    private createGroupAutoColumnsIfNeeded;
    private getWidthOfColsInList;
    getGridBalancedTree(): OriginalColumnGroupChild[];
}
