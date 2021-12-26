import {Gender} from "./gender.enum";
import {petType} from "./petType.enum";

export class Pet{
  id: number |undefined;
  name: string="";
  age: number |undefined;
  gender: Gender = Gender.FEMALE;
  weight: number |undefined;
  isSterilised: boolean=false;
  animalType: petType = petType.DOG;
  dailyFoodGram: number|undefined;
  userId: number |undefined;
  createTime: Date =new Date();


}
