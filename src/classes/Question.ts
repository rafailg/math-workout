import {evaluate} from "mathjs"
import type { Settings } from "./Settings"

export class Question{
    constructor (public Description:string, public Answer: number){}
    public Solved: boolean
    public CompletedIn: number
}

export function CreateQuestion(settings: Settings): Question{
    let description = GetOperationString(settings)
    let answer = GetOperationAnswer(description)
    let question = new Question(description, answer)
    return question
}

function GetOperationString(settings: Settings): string{
    var characters: string[] = []

    for(let i = 0; i < settings.OperationCount; i++){
        var digits = Math.ceil(Math.random() * settings.MaxNumberSize) 
        characters.push(GetRandomNumber(digits).toString())
        if(i != settings.OperationCount - 1){
            characters.push(GetRandomOperator(settings))
        }
    }
    return characters.join(" ")
}

function GetOperationAnswer(operation: string): number{
    return parseInt(evaluate(operation)) 
}

function GetRandomOperator(settings: Settings): string{
    let operators = GetAvailableOperators(settings)
    return operators[Math.floor(Math.random()*operators.length)]
}

function GetAvailableOperators(settings: Settings): string[]{
    let operators = []
    if(settings.UsePlus){operators.push('+')}
    if(settings.UseMinus){operators.push('-')}
    if(settings.UseMultiply){operators.push('*')}
    return operators
}

//Replace operator characters
//function FormatEquationString(operation: string): string{
//
//}

function GetRandomNumber(maxDigits: number): number {
    const maxValue = Math.pow(10, maxDigits) - 1;
    let randomNumber = Math.ceil(Math.random() * maxValue);
    while(randomNumber.toString().length < maxDigits){
        randomNumber = GetRandomNumber(maxDigits);
    }
    return randomNumber;
}