import { Question, CreateQuestion } from "./Question"

export class Workout{
    public Questions: Question[]
    public CompletedAt: Date
    public Comleted: boolean
}

export function CreateWorkout(questionCount:number): Workout{
    let questions: Question[] = [];
    for (let index = 0; index < questionCount; index++) {
        questions.push(CreateQuestion(1))        
    }
}

