export class feedHistory{
  id:number|undefined;
  userId:number=0;
  petId:number=0;
  foodGram:number=0.0;
  feedTime:Date=new Date();

  constructor(id?:number , userId:number=0 , petId:number=0) {
    this.id=id;
    this.userId=userId;
    this.petId=petId;
  }

}
