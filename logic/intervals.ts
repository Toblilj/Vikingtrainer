//Här ska jag hantera busniess logic, intervals ska ta in data, bearbeta data och retunera data.

export type WorkoutConfig = {
  runMeters: number;
  walkMeters: number;
  rounds: number;
};

export function createWorkout(config: WorkoutConfig) {
  return {
    ...config,
    currentRound: 1,
    currentPhase: "run", // "run" | "walk"
    distanceInPhase: 0,
  };
}
