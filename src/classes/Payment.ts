import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter{
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}
    format(): string {
        return `${this.recipient} owes INR${this.amount} for ${this.details}`
    }
}