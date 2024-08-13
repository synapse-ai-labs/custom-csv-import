export declare enum Steps {
    Upload = "upload",
    RowSelection = "row-selection",
    MapColumns = "map-columns",
    PromptSelection = "prompt-selection"
}
export type FileRow = {
    index: number;
    values: string[];
};
export type FileDataMeta = {
    defaultPromptId: string;
    inheritRepoConfig: boolean;
};
export type FileData = {
    fileName: string;
    rows: FileRow[];
    sheetList: string[];
    errors: string[];
    meta?: FileDataMeta;
};
