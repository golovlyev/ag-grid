// Type definitions for ag-grid-community v20.0.3-cg
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Promise } from "../utils";
export interface SimpleHttpRequestParams {
    url: string;
}
export declare function simpleHttpRequest(params: SimpleHttpRequestParams): Promise<any>;
