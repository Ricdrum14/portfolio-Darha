export class Work{

id: string;
constructor(
    public title:string,
    public description: string,
    public text: string,
    public imageURL: string,
){
    this.id =crypto.randomUUID().substring(0, 8);
}

}