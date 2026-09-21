export type RunStatus = "queued" | "running" | "completed" | "failed";

export type Run = {
  id: string;
  experiment: string;
  revision: string;
  test: string;
  status: RunStatus;
  startedAt: string;
  finishedAt?: string;
  result?: unknown;
  error?: string;
};