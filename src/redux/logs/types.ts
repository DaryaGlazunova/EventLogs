export interface IEventLogs {
  id?: number;
  userId?: number;
  title?: string;
  completed?: boolean;
  date?: string;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}
