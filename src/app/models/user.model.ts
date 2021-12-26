export class User{
  id: number |undefined;
  username: string="";
  password: string="";
  name: string="";
  phoneNumber: string="+90..";
  email: string="";
  currentFoodGram: number |undefined;
  userId: number =0.0;
  createTime: Date =new Date();

  constructor(id?: number,
              currentFoodGram: number=0
            ) {
    this.id=id;
    this.currentFoodGram=currentFoodGram;
  }

}
