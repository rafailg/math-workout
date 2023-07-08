import {evaluate} from "mathjs"

export class Question{
    constructor (public Description:string, public Answer: number){}
    public Solved: boolean
    public CompletedIn: number
}

export function CreateQuestion(operationCount: number, numberSize:number): Question{
    let description = GetOperationString(operationCount, numberSize)
    let answer = GetOperationAnswer(description)
    let question = new Question(description, answer)
    return question
}

function GetOperationString(operationCount:number, numberSize:number): string{
    var characters: string[] = []

    for(let i = 0; i < operationCount; i++){
        characters.push(GetRandomNumber(numberSize).toString())
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

function GetRandomNumber(digits: number){
    var number = Math.ceil(Math.random() * (10 * digits));
    if(number.toString().length > digits) number--;
    return number
}