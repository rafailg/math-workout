import { writable } from "svelte/store";
import { Workout } from "../classes/Workout";

export const Workouts = writable<Workout[]>([])

export const CurrentWorkout = writable<Workout>(null)