export interface AppError {
  message: string;
  code?: string | number;
  status?: number;
  details?: unknown;
}
