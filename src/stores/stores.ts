import { writable } from "svelte/store";
import { Workout } from "../classes/Workout";
import { Question } from "../classes/Question";

export const Workouts = writable<Workout[]>([])

export const CurrentWorkout = writable<Workout>(null)

export const CurrentQuestion = writable<Question>(null)