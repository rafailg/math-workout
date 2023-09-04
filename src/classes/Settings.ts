
export class Settings{
    constructor (questionCount: number, operationCount: number, maxNumberSize: number, usePlus: boolean, useMinus: boolean, useMultiply : boolean){
        this.QuestionCount = questionCount
        this.OperationCount = operationCount
        this.MaxNumberSize = maxNumberSize
        this.UsePlus = usePlus
        this.UseMinus = useMinus
        this.UseMultiply = useMultiply
    }

    public QuestionCount: number
    public OperationCount: number
    public MaxNumberSize: number
    public UsePlus: boolean
    public UseMinus: boolean
    public UseMultiply: boolean
}