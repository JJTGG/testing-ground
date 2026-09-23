export type RunEnvironment = {
  execution: string;
  database: string;
  database_scope: string;
  llm_provider_invoked: boolean;
};

export type RunDataset = {
  type: string;
  venue: string;
  symbol: string;
  timeframe: string;
  bar_count: number;
  data_epoch: number;
};

export type RunCandidate = {
  count: number;
  outcome: string;
  fitness: number;
  overfitting_risk: string;
  mutation_calls: number;
};

export type SourceArtifact = {
  name: string;
  workflow_run: number;
};

export type RunResult = {
  run_id: string;
  experiment: string;
  test: string;
  testing_ground_revision?: string;
  inalpha_revision?: string;
  revision?: string;
  status: string;
  environment: RunEnvironment;
  dataset: RunDataset;
  candidate: RunCandidate;
  verified_boundaries: string[];
  observations: string[];
  source_artifact: SourceArtifact;
};