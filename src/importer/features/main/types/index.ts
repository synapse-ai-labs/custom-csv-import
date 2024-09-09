export enum Steps {
  Upload = "upload",
  RowSelection = "row-selection",
  MapColumns = "map-columns",
  BotSelection = "bot-selection"
}

export type FileRow = {
  index: number;
  values: string[];
};

export type FileDataMeta = {
  defaultBotId: string;
  inheritRepoConfig: boolean;
};

export type FileData = {
  fileName: string;
  rows: FileRow[];
  sheetList: string[];
  errors: string[];
  meta?: FileDataMeta;
};
