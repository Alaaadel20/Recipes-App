// two ways to create  class:

// the first one:
// export class Ingredient {
// public name:string;
// public amount: number;
// constructor(name: string, amount: number){
// this.name=name
// this.amount=amount
// }
// }

// the second one:
// We can get rid of the declaration of our properties and get rid of the content in the body
//  of this constructor and simply add an accessor in front of the property name , so public 
//  in front of both arguments.
// What that will do is behind the scenes, it will create the same effect we had 
// before,and amount in this case and it will automatically assign the values we
//  receive in this constructor to these newly created properties.

export class Ingredient {
constructor(public name:string, public amount: number){}
}












