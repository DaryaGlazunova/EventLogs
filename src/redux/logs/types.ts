// export interface IEventLogs {
//   id?: string;
//   date?: string;
//   equipment?: string;
//   message?: string;
//   responsible?: string;
//   read?: boolean;
// }

export interface IEventLogs {
  id?: number;
  userId?: number;
  title?: string;
  completed?: boolean;
  date?: string;
}

// export type TSearchProductParams = {
//   sortBy: string;
//   order: string;
//   categoryName: string;
//   search: string;
// };

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}
