import {evaluate} from "mathjs"

export class Question{
    constructor (public Description:string, public Answer: number){}
    public Solved: boolean
    public CompletedIn: number
}

export function CreateQuestion(difficulty: number): Question{
    let description = GetOperationString(difficulty)
    let answer = GetOperationAnswer(description)
    let question = new Question(description, answer)
    return question
}

function GetOperationString(amountOfNumbers: number): string{
    var characters: string[] = []

    for(let i = 0; i < amountOfNumbers; i++){
        characters.push(GetRandomNumber(amountOfNumbers).toString())
        if(i != amountOfNumbers - 1){
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
    return Math.ceil(Math.random() * (10 * digits))
}