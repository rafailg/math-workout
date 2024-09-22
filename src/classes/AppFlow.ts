import { Workout, CreateWorkout } from "./Workout";
import { CurrentWorkout, AmountOfNumbers, AmountOfQuestions, NumberLength, UsePlus, UseMinus, UseMultiply } from "../stores";
import { Settings } from "./Settings";
let amountOfQuestions = 10;
let amountOfNumbers = 1;
let numberLength = 1;
let usePlus = false;
let useMinus = false;
let useMultiply = false;

AmountOfNumbers.subscribe(a => amountOfNumbers = a)
AmountOfQuestions.subscribe(a => amountOfQuestions = a)
NumberLength.subscribe(l => numberLength = l)
UsePlus.subscribe(u => usePlus = u)
UseMinus.subscribe(u => useMinus = u)
UseMultiply.subscribe(u => useMultiply = u)


export function StartNewWorkout(){
    let settings = new Settings(amountOfQuestions, amountOfNumbers, numberLength, usePlus, useMinus, useMultiply)

    let workout: Workout = CreateWorkout(settings);
    
    CurrentWorkout.set(workout);
}