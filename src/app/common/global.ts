export class global {
    public static idCount:number = 10;

    public static getIdCount() {
        return this.idCount;
    }

    public static increaseIdCount() {
        this.idCount++;
    }
}