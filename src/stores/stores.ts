import { writable } from "svelte/store";
import { Workout } from "../classes/Workout";

export const Workouts = writable<Workout[]>([])