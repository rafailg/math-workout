import { writable } from "svelte/store";
import { Workout } from "../classes/Workout";
import { Question } from "../classes/Question";

export const Workouts = writable<Workout[]>([])

export const CurrentWorkout = writable<Workout>(null)

export const CurrentQuestion = writable<Question>(null)

export const AmountOfNumbers = writable<number>(2)

export const NumberLength = writable<number>(1)

export const AmountOfQuestions = writable<number>(10)