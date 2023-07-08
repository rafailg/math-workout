import { Workout, CreateWorkout } from "./Workout";
import { CurrentWorkout, AmountOfNumbers, AmountOfQuestions, NumberLength } from "../stores/stores";
let amountOfQuestions = 10;
let amountOfNumbers = 1;
let numberLength = 1;

AmountOfNumbers.subscribe(a => amountOfNumbers = a)
AmountOfQuestions.subscribe(a => amountOfQuestions = a)
NumberLength.subscribe(l => numberLength = l)

export function StartNewWorkout(){
    let workout: Workout = CreateWorkout(amountOfQuestions, amountOfNumbers, numberLength);
    CurrentWorkout.set(workout);
}