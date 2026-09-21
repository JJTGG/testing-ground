import fs from "node:fs";
import path from "node:path";

import type { RunResult } from "./types";

const resultsRoot = path.join(
  process.cwd(),
  "experiments",
);

function getResultFiles(): string[] {
  if (!fs.existsSync(resultsRoot)) {
    return [];
  }

  const experimentDirectories = fs
    .readdirSync(resultsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory());

  return experimentDirectories.flatMap((experimentDirectory) => {
    const resultsDirectory = path.join(
      resultsRoot,
      experimentDirectory.name,
      "results",
    );

    if (!fs.existsSync(resultsDirectory)) {
      return [];
    }

    return fs
      .readdirSync(resultsDirectory, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isFile() &&
          entry.name.endsWith(".json"),
      )
      .map((entry) => path.join(resultsDirectory, entry.name));
  });
}

export function getRuns(): RunResult[] {
  return getResultFiles().map((file) => {
    const content = fs.readFileSync(file, "utf8");
    return JSON.parse(content) as RunResult;
  });
}

export function getRun(runId: string): RunResult | undefined {
  return getRuns().find((run) => run.run_id === runId);
}