//highly strict //
// let a : number;
// let arr : [];
// let str : string;
// let bool : boolean;
// let tup : [number,string,boolean] = [23,"sam",false];
// tup.push("tio")
// let variable : any;
// variable = "sam";
// variable = 89;
// function roll() : never{
//     while(true){
//         console.log("infinite")
//     }
// }
// roll();
//console.log('first')
// function print():void{
//     console.log("hi sam")
// }
// print();
var sam;
(function (sam) {
    sam["name"] = "soumikdas";
    sam["song"] = "classic";
    sam[sam["age"] = 20] = "age";
})(sam || (sam = {}));
console.log(sam.name);
