import {evaluate} from "mathjs"
import type { Settings } from "./Settings"

export class Question{
    constructor (public Description:string, public Answer: number){}
    public Solved: boolean
    public CompletedIn: number
}

export function CreateQuestion(settings: Settings): Question{
    let description = GetOperationString(settings.OperationCount, settings.MaxNumberSize)
    let answer = GetOperationAnswer(description)
    let question = new Question(description, answer)
    return question
}

function GetOperationString(operationCount:number, maxDigits:number): string{
    var characters: string[] = []

    for(let i = 0; i < operationCount; i++){
        var digits = Math.ceil(Math.random() * maxDigits) 
        characters.push(GetRandomNumber(digits).toString())
        if(i != operationCount - 1){
            characters.push(GetRandomOperator())
        }
    }
    return characters.join(" ")
}

function GetOperationAnswer(operation: string): number{
    return parseInt(evaluate(operation)) 
}

function GetRandomOperator(){
    return ['+','-'][Math.floor(Math.random()*2)]
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