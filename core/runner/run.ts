import type { Run } from "./types";

export type CreateRunInput = {
  experiment: string;
  revision: string;
  test: string;
};

export function createRun(input: CreateRunInput): Run {
  return {
    id: crypto.randomUUID(),
    experiment: input.experiment,
    revision: input.revision,
    test: input.test,
    status: "queued",
    startedAt: new Date().toISOString(),
  };
}