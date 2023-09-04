import { Question, CreateQuestion } from "./Question"
import { Settings } from "./Settings";

export class Workout{
    constructor (public Questions: Question[]){}
    public CompletedAt: Date
    public Completed: boolean
}

export function CreateWorkout(settings: Settings): Workout{
    let questions: Question[] = [];
    for (let index = 0; index < settings.QuestionCount; index++) {
        questions.push(CreateQuestion(settings))        
    }
    return new Workout(questions)
}
