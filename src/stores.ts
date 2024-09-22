import { writable } from "svelte/store";
import { Workout } from "./classes/Workout";
import { Question } from "./classes/Question";
import { persisted } from "svelte-persisted-store";

export const Workouts = writable<Workout[]>([])
export const CurrentWorkout = writable<Workout>(null)
export const CurrentQuestion = writable<Question>(null)

export const AmountOfNumbers = persisted<number>("amountOfNumbers", 2)
export const NumberLength = persisted<number>("numberLength", 1)
export const AmountOfQuestions = persisted<number>("amountOfQuestions", 10)
export const UsePlus = persisted<boolean>("usePlus", true)
export const UseMinus = persisted<boolean>("useMinus", true)
export const UseMultiply = persisted<boolean>("useMultiply", true)