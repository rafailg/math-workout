import { Question, CreateQuestion } from "./Question"

export class Workout{
    constructor (public Questions: Question[]){}
    public CompletedAt: Date
    public Completed: boolean
}

export function CreateWorkout(questionCount:number): Workout{
    let questions: Question[] = [];
    for (let index = 0; index < questionCount; index++) {
        questions.push(CreateQuestion(3))        
    }
    return new Workout(questions)
}

