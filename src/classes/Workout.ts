import { Question, CreateQuestion } from "./Question"

export class Workout{
    public Questions: Question[]
    public CompletedAt: Date
}

export function CreateWorkout(questionCount:number){
    let questions: Question[] = [];
    for (let index = 0; index < questionCount; index++) {
        questions.push(CreateQuestion(1))        
    }
}

