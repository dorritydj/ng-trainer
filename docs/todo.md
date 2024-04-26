# TODO

## Routes

### Trainer:

- program
  - make a generic program using workouts
    - workouts can be entered on their own
    - saved and referenced for refilling
  - assign that program to a client/set of clients
- client
  - enter/see metrics for client
  - graph metrics over time

### Client

- program
  - overview of program by week
  - view/log individual workout
- profile
  - log metrics
  - view graphs of metrics over time

## Data

### Metrics

- height
- weight
- bmi
- body fat %
- PRs

### Workout

- name
- sets
- reps
- duration
- weight
- AMRAP
- RPE

- Valid Structure:
  - sets, reps, weight?, AMRAP?, RPE?
  - sets, duration, weight?, AMRAP?, RPE?

### Program

- durationInWeeks
- workoutsPerWeek
- set of workouts over a single week, that will be applied over each week
  - areas of a workout
    - warmup, primary, supplement, cooldown
  - superset
  - circuit
  - rest time
- progression strategy
  - strength, hypertrophy
  - this might make more sense on a per workout basis

### PRs

- auto generated from stored workout
  - as new workout is logged, compare with current PR
  - need diffing strategy for determining what's better
