import registry from "../experiments/registry.json";

export type ExperimentStatus =
  | "planned"
  | "active"
  | "completed"
  | "archived";

export type Experiment = {
  slug: string;
  name: string;
  status: ExperimentStatus;
  description: string;
  repository: string;
  site?: string;
};

type Registry = {
  experiments: Experiment[];
};

const data = registry as Registry;

export function getExperiments(): Experiment[] {
  return data.experiments;
}

export function getExperiment(slug: string): Experiment | undefined {
  return data.experiments.find((experiment) => experiment.slug === slug);
}