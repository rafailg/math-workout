
export class Question{
    constructor (public Description:string, public Answer: number){}
    public Solved: boolean
    public CompletedIn: number
}

export function CreateQuestion(difficulty: number): Question{
    let part1 = Math.floor(Math.random() * (10 * difficulty))
    let part2 = Math.floor(Math.random() * (10 * difficulty))
    let description = `${part1} + ${part2}`
    let answer = part1 + part2
    let question = new Question(description, answer)
    return question
}