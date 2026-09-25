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
  slot: number;
  outcome: string;
  source_hash: string;
  fitness: number;
  overfitting_risk: string;
};

export type RunCandidateSummary = {
  count: number;
  outcome: string;
  fitness: number;
  overfitting_risk: string;
  mutation_calls: number;
};

export type StatisticalTrace = {
  candidate_slots_requested: number;
  distinct_candidates_evaluated: number;
  mutation_calls: number;
  evolutionary_trial_count_observed: boolean;
  cv_statistics_observed: boolean;
  evaluator_trial_count_parameters: string[];
  e1_candidate_evaluation_references: {
    run_cv_backtest: boolean;
    deflated_sharpe_ratio: boolean;
    probability_of_backtest_overfitting: boolean;
  };
  separate_statistical_implementation_exists: boolean;
};

export type SourceArtifact = {
  name: string;
  workflow_run: number;
};

export type RunSource = {
  workflow_run: string;
  workflow_commit: string;
  inalpha_commit: string;
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

  // Current result format.
  candidates?: RunCandidate[];
  statistical_trace?: StatisticalTrace;
  source?: RunSource;

  // Legacy result format.
  candidate?: RunCandidateSummary;
  source_artifact?: SourceArtifact;

  verified_boundaries: string[];
  observations: string[];
};