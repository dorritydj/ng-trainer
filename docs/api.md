# API Structure

## Notes

- Programs are a collection of Workouts
- Workouts are a collection of Lifts
- Lifts are defined by the Trainer
  - this is for right now, may expand later on
- Might make sense to get Lift information with Trainer
  - maybe just IDs and larger information requested later

## Trainer

- GET Trainer BY ID
  - Trainer info
  - Program Id
  - Client Id
  - Workout Id
- UPDATE Trainer

## Program

- GET Program BY ID
  - Workout Id
- POST Program FOR Trainer
- UPDATE Program FOR Trainer
- DELETE Program FOR Trainer

## Clients

- GET Client BY ID
  - Program Id
  - Trainer Id
- UPDATE Client
- GET Client FOR Trainer
- POST Client FOR Trainer
- DELETE Client FOR Trainer

## Workouts

- GET Workout
  - Lift Id

## Lifts

- GET Lift BY ID
- GET Lifts FOR Workout
- UPDATE Lift
- DELETE Lift
